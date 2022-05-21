import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, filter, Observable, pluck, take, tap } from 'rxjs';

import { CurrencyExchange, CurrencyExchangeRates, ExchangeRates } from '@shared/exchange-rates';
import { CostsResponse } from '../types';
import { ExchangeRatesFacade } from '@shared/exchange-rates/facades';
import { updateBehaviorSubject } from '@utils/helpers';
import { notEmptyArray } from '@utils/types';

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
    this._exchangeRatesFacade.baseCurrencyExchangeRates$.next(
      updateCurrencyExchangeRates(costs.baseCurrency.currency, exchangeRates)
    );
    this._exchangeRatesFacade.daCurrencyExchangeRates$.next(
      updateCurrencyExchangeRates(costs.baseCurrency.currency, exchangeRates)
    );
  }
}

function updateCurrencyExchangeRates(currencyName: string, exchangeRates: ExchangeRates): CurrencyExchangeRates {
  return currencyName === exchangeRates.sourceCurrency
    ? getSourceExchangeRates(currencyName)
    : getRefExchangeRates(currencyName, exchangeRates);
}

function getExchangeRate(currencyName: string, exchangeRates: ExchangeRates): number {
  return exchangeRates.paymentCurrencies.find(({ toCurrency }) => toCurrency === currencyName)?.exchangeRate ?? 1;
}

function getSourceExchangeRates(currency: string): CurrencyExchangeRates {
  return {
    from: 1,
    to: 1,
    currency
  };
}

function getRefExchangeRates(currency: string, exchangeRates: ExchangeRates): CurrencyExchangeRates {
  return {
    from: 1 / getExchangeRate(currency, exchangeRates),
    to: getExchangeRate(currency, exchangeRates),
    currency
  };
}
