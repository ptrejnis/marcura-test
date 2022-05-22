import { CurrencyExchangeRates, ExchangeRatesPair } from '../types';

export function getExchangeRatePairs(
  fromCurrency: CurrencyExchangeRates,
  toCurrency: CurrencyExchangeRates
): ExchangeRatesPair {
  return fromCurrency.currency === toCurrency.currency
    ? getEqualCurrencyPairs(fromCurrency.currency)
    : {
        fromCurrency: {
          exchangeRate: fromCurrency.exchangeRateFrom,
          currency: fromCurrency.currency
        },
        toCurrency: {
          exchangeRate: toCurrency.exchangeRateTo,
          currency: toCurrency.currency
        }
      };
}

function getEqualCurrencyPairs(currency: string): ExchangeRatesPair {
  return {
    fromCurrency: {
      exchangeRate: 1,
      currency
    },
    toCurrency: {
      exchangeRate: 1,
      currency
    }
  };
}
