export interface ExchangeRates {
  sourceCurrency: string;
  paymentCurrencies: PaymentCurrency[];
}

export interface PaymentCurrency {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}

export interface CurrencyExchangeRates {
  exchangeRateFrom: number;
  exchangeRateTo: number;
  currency: string;
}

export interface ExchangeRatesPair {
  fromCurrency: RelativeExchangeRate;
  toCurrency: RelativeExchangeRate;
}

interface RelativeExchangeRate {
  exchangeRate: number;
  currency: string;
}
