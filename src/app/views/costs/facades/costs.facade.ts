import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, filter, Observable, pluck, take, tap } from 'rxjs';

import { notEmptyArray } from '@utils/types';
import { ExchangeRates, getCurrencyExchangeRate, getExchangeRate, ExchangeRatesFacade } from '@shared/exchange-rates';
import { CostsResponse } from '../types';

@Injectable()
export class CostsFacade {
  readonly costs$: Observable<CostsResponse> = this._route.data.pipe(pluck('costs'));
  readonly exchangeRates$: Observable<ExchangeRates> = this._route.data.pipe(pluck('exchangeRates'));

  constructor(private readonly _route: ActivatedRoute, private readonly _exchangeRatesFacade: ExchangeRatesFacade) {}

  updateCostsCurrencies(): void {
    combineLatest([this.exchangeRates$, this.costs$])
      .pipe(
        filter((v) => notEmptyArray(v.filter(Boolean))),
        take(1),
        tap((v) => this._updateCurrencies(v))
      )
      .subscribe();
  }

  private _updateCurrencies([exchangeRates, costs]: [ExchangeRates, CostsResponse]): void {
    this._exchangeRatesFacade.exchangeRates$.next(exchangeRates);
    const { baseCurrency, daCurrency } = costs;
    const { sourceCurrency } = exchangeRates;
    this._exchangeRatesFacade.baseCurrencyExchangeRates$.next(
      getCurrencyExchangeRate(
        { fromCurrency: sourceCurrency, toCurrency: baseCurrency.currency },
        getExchangeRate(costs.baseCurrency.currency, exchangeRates)
      )
    );
    this._exchangeRatesFacade.daCurrencyExchangeRates$.next(
      getCurrencyExchangeRate(
        { fromCurrency: sourceCurrency, toCurrency: daCurrency.currency },
        getExchangeRate(costs.baseCurrency.currency, exchangeRates)
      )
    );
  }
}
