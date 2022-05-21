import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CurrencyExchangeRates, PaymentCurrency } from '../types';
import { ExchangeRatesFormFacade, ExchangeRatesFacade } from '../facades';

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
      this._exchangeRatesFacade.selectedCurrency$.next(updateCurrencyExchangeRates(currency))
    );
    this._formFacade.updateDefaultValue(this.exchangeRates$);
  }
}

function updateCurrencyExchangeRates(currencyDetails: PaymentCurrency): CurrencyExchangeRates {
  const { fromCurrency, toCurrency } = currencyDetails;
  return fromCurrency === toCurrency ? getSourceExchangeRates(toCurrency) : getRefExchangeRates(currencyDetails);
}

function getSourceExchangeRates(currency: string): CurrencyExchangeRates {
  return {
    from: 1,
    to: 1,
    currency
  };
}

function getRefExchangeRates(currencyDetails: PaymentCurrency): CurrencyExchangeRates {
  const { exchangeRate, toCurrency } = currencyDetails;
  return {
    from: 1 / exchangeRate,
    to: exchangeRate,
    currency: toCurrency
  };
}
