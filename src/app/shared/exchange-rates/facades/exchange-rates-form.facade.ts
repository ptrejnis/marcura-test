import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, map, Observable, Subject, take, takeUntil, tap } from 'rxjs';

import { isNonNullable } from '@utils/types';
import { updateBehaviorSubject } from '@utils/helpers';
import { CurrencyConverter, ExchangeRates, PaymentCurrency } from '../types';

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
        tap((v) => isNonNullable<PaymentCurrency>(v) && this.currencyControl.setValue(v))
      )
      .subscribe();
  }

  onCurrencyChange(currencyRate$: BehaviorSubject<CurrencyConverter>): void {
    this.currency$
      .pipe(
        takeUntil(this._destroyed$),
        distinctUntilChanged((prev, next) => prev.toCurrency !== prev.toCurrency),
        tap(({ toCurrency, exchangeRate }) =>
          updateBehaviorSubject(currencyRate$, {
            toCurrency,
            exchangeRate
          })
        )
      )
      .subscribe();
  }
}