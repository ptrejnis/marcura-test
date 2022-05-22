import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaymentCurrency } from '../types';
import { ExchangeRatesFormFacade, ExchangeRatesFacade } from '../facades';
import { getCurrencyExchangeRate } from '../utils';

@Component({
  selector: 'exchange-rates',
  templateUrl: 'exchange-rates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExchangeRatesFormFacade]
})
export class ExchangeRatesComponent implements OnInit {
  readonly baseCurrencyAmount = 1;
  readonly form = this._formFacade.form;
  readonly exchangeRates$ = this._exchangeRatesFacade.exchangeRates$;
  readonly baseCurrencyExchangeRates$ = this._exchangeRatesFacade.baseCurrencyExchangeRates$;
  readonly baseToSelectedExchangeRates$ = this._exchangeRatesFacade.baseToSelectedExchangeRates$;

  get selectedCurrency(): PaymentCurrency {
    return this._formFacade.currencyControl.value;
  }

  constructor(
    private readonly _formFacade: ExchangeRatesFormFacade,
    private readonly _exchangeRatesFacade: ExchangeRatesFacade,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._formFacade.onCurrencyChange((currency) =>
      this._exchangeRatesFacade.selectedCurrency$.next(
        getCurrencyExchangeRate(
          { fromCurrency: currency.fromCurrency, toCurrency: currency.toCurrency },
          currency.exchangeRate
        )
      )
    );
    this._formFacade.updateDefaultValue(this.exchangeRates$);
  }
}
