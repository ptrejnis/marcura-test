import { CurrencyExchangeRates, PaymentCurrency } from '../types';
import { decimalCalculation } from '@utils/helpers';

export function getCurrencyExchangeRate(
  currencies: Omit<PaymentCurrency, 'exchangeRate'>,
  exchangeRate: number
): CurrencyExchangeRates {
  const { fromCurrency, toCurrency } = currencies;
  return fromCurrency === toCurrency
    ? getSourceCurrencyExchangeRates(fromCurrency)
    : {
        exchangeRateFrom: decimalCalculation(1 / exchangeRate),
        exchangeRateTo: decimalCalculation(exchangeRate),
        currency: toCurrency
      };
}

export function getSourceCurrencyExchangeRates(currency: string): CurrencyExchangeRates {
  return {
    exchangeRateFrom: 1,
    exchangeRateTo: 1,
    currency: currency
  };
}
