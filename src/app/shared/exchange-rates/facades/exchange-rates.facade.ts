import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { CurrencyConverter } from '../types';
import { EXCHANGE_RATES_CONFIG, ExchangeRatesConfig } from '@shared/exchange-rates/providers';

@Injectable({ providedIn: 'root' })
export class ExchangeRatesFacade {
  readonly baseCurrency$: BehaviorSubject<CurrencyConverter> = new BehaviorSubject(
    this._config.initialCurrencyConverter
  );
  readonly daCurrency$: BehaviorSubject<CurrencyConverter> = new BehaviorSubject(this._config.initialCurrencyConverter);

  constructor(
    @Inject(EXCHANGE_RATES_CONFIG)
    private readonly _config: ExchangeRatesConfig,
    private readonly _route: ActivatedRoute
  ) {}
}
