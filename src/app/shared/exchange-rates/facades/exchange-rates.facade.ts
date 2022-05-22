import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { CurrencyExchangeRates, ExchangeRates, ExchangeRatesPair } from '../types';
import { getExchangeRatePairs } from '../utils';

@Injectable({ providedIn: 'root' })
export class ExchangeRatesFacade {
  readonly exchangeRates$: BehaviorSubject<ExchangeRates> = new BehaviorSubject({} as ExchangeRates);
  readonly baseCurrencyExchangeRates$: BehaviorSubject<CurrencyExchangeRates> = new BehaviorSubject(
    {} as CurrencyExchangeRates
  );
  readonly daCurrencyExchangeRates$: BehaviorSubject<CurrencyExchangeRates> = new BehaviorSubject(
    {} as CurrencyExchangeRates
  );
  readonly selectedCurrency$ = new BehaviorSubject<CurrencyExchangeRates>({} as CurrencyExchangeRates);
  readonly baseToSelectedExchangeRates$: Observable<ExchangeRatesPair> = this._updateExchangeRatesPair(
    this.baseCurrencyExchangeRates$,
    this.selectedCurrency$
  );
  readonly daToBaseExchangeCurrency$: Observable<ExchangeRatesPair> = this._updateExchangeRatesPair(
    this.daCurrencyExchangeRates$,
    this.baseCurrencyExchangeRates$
  );
  readonly daToSelectedExchangeCurrency$: Observable<ExchangeRatesPair> = this._updateExchangeRatesPair(
    this.daCurrencyExchangeRates$,
    this.selectedCurrency$
  );

  constructor(private readonly _route: ActivatedRoute) {}

  private _updateExchangeRatesPair(
    fromCurrency$: BehaviorSubject<CurrencyExchangeRates>,
    toCurrency$: BehaviorSubject<CurrencyExchangeRates>
  ): Observable<ExchangeRatesPair> {
    return combineLatest([fromCurrency$.asObservable(), toCurrency$.asObservable()]).pipe(
      map(([from, selected]) => getExchangeRatePairs(from, selected))
    );
  }
}
