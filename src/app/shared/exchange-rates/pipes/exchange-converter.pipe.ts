import { Pipe, PipeTransform } from '@angular/core';

import { ExchangeRates, PaymentCurrency } from '../types';

@Pipe({ name: 'exchangeConverter' })
export class ExchangeConverterPipe implements PipeTransform {
  transform(value: number, currencyConverter: PaymentCurrency, exchangeRates: ExchangeRates): number {
    const { paymentCurrencies, sourceCurrency } = exchangeRates;
    const { fromCurrency, exchangeRate } = currencyConverter;

    if (fromCurrency === sourceCurrency) {
      return exchangeRate;
    }

    const exchangeRateRef: number =
      paymentCurrencies.find(({ toCurrency }) => toCurrency === fromCurrency)?.exchangeRate ?? 0;
    const baseCurrencyExchangeRate: number = 1 / exchangeRateRef;

    return exchangeRate * baseCurrencyExchangeRate;
  }
}
