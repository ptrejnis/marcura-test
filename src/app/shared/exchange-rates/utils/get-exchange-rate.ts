import { ExchangeRates } from '../types';

export function getExchangeRate(currencyName: string, exchangeRates: ExchangeRates): number {
  return exchangeRates.paymentCurrencies.find(({ toCurrency }) => toCurrency === currencyName)?.exchangeRate ?? 1;
}
