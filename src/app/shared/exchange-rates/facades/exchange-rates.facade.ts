import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { CurrencyExchangeRates, ExchangeRates } from '../types';

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
  readonly baseToSelectedExchangeRates$: Observable<CurrencyExchangeRates> = combineLatest([
    this.baseCurrencyExchangeRates$.asObservable(),
    this.selectedCurrency$.asObservable()
  ]).pipe(
    map(([base, selected]) => {
      return {
        from: base.from,
        to: selected.to,
        currency: selected.currency
      };
    })
  );
  readonly daToBaseExchangeCurrency$: Observable<CurrencyExchangeRates> = combineLatest([
    this.daCurrencyExchangeRates$.asObservable(),
    this.baseCurrencyExchangeRates$.asObservable()
  ]).pipe(
    map(([da, base]) => {
      return {
        from: da.from,
        to: base.to,
        currency: base.currency
      };
    })
  );
  readonly daToSelectedExchangeCurrency$: Observable<CurrencyExchangeRates> = combineLatest([
    this.daCurrencyExchangeRates$.asObservable(),
    this.selectedCurrency$.asObservable()
  ]).pipe(
    map(([da, selected]) => {
      return {
        from: da.from,
        to: selected.to,
        currency: selected.currency
      };
    })
  );

  constructor(private readonly _route: ActivatedRoute) {}
}
