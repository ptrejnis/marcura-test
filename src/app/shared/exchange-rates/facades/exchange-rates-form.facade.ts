import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, map, Observable, Subject, take, takeUntil, tap } from 'rxjs';

import { notEmptyObject } from '@utils/types';
import { ExchangeRates, PaymentCurrency } from '../types';

@Injectable()
export class ExchangeRatesFormFacade implements OnDestroy {
  form: FormGroup = this._fb.group({
    currency: [null]
  });

  currency$: Observable<PaymentCurrency> = this.currencyControl.valueChanges;

  private _destroyed$: Subject<void> = new Subject();

  get currencyControl(): FormControl {
    return this.form.get('currency') as FormControl;
  }

  constructor(private readonly _fb: FormBuilder) {}

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  updateDefaultValue(exchangeRates$: Observable<ExchangeRates>): void {
    exchangeRates$
      .pipe(
        take(1),
        map(({ paymentCurrencies, sourceCurrency }) =>
          paymentCurrencies.find(({ toCurrency }) => toCurrency === sourceCurrency)
        ),
        tap((v) => notEmptyObject(v) && this.currencyControl.setValue(v))
      )
      .subscribe();
  }

  onCurrencyChange(cb: (currency: PaymentCurrency) => void): void {
    this.currency$
      .pipe(
        takeUntil(this._destroyed$),
        distinctUntilChanged((prev, next) => prev.toCurrency === next.toCurrency),
        tap(cb)
      )
      .subscribe();
  }
}
