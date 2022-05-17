import { InjectionToken } from '@angular/core';
import { CurrencyConverter } from '../types';

export interface ExchangeRatesConfig {
  baseCurrency: string;
  initialCurrencyConverter: CurrencyConverter;
}

const INITIAL_CURRENCY_CONVERTER: CurrencyConverter = {
  amount: 1,
  fromCurrency: '',
  toCurrency: '',
  exchangeRate: 1
};

export const EXCHANGE_RATES_CONFIG = new InjectionToken<ExchangeRatesConfig>('exchange-rates.config', {
  providedIn: 'root',
  factory: () => ({
    baseCurrency: '',
    initialCurrencyConverter: INITIAL_CURRENCY_CONVERTER
  })
});
