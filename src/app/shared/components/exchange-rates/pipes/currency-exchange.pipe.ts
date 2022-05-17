import { Pipe, PipeTransform } from '@angular/core';

import {
    ExchangeRates,
    PaymentCurrency,
} from '@shared/dictionaries/exchange-rates';

@Pipe({ name: 'exchange' })
export class ExchangePipe implements PipeTransform {
    transform(value: PaymentCurrency, exchangeRates: ExchangeRates): string {
        const { paymentCurrencies, sourceCurrency } = exchangeRates;
        const { fromCurrency, exchangeRate, toCurrency } = value;

        if (fromCurrency === sourceCurrency) {
            return `${exchangeRate.toFixed(4)} ${toCurrency}`;
        }

        const exchangeRateRef: number = paymentCurrencies.find(({ toCurrency }) => toCurrency === fromCurrency)?.exchangeRate ?? 0;
        const baseCurrencyExchangeRate: number = 1 / exchangeRateRef;
        const currencyRate = exchangeRate * baseCurrencyExchangeRate;
        return `${currencyRate.toFixed(4)} ${toCurrency}`;
    }
}
