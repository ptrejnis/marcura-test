export interface ExchangeRates {
  sourceCurrency: string;
  paymentCurrencies: PaymentCurrency[];
}

export interface PaymentCurrency {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}

export interface CurrencyExchange {
  baseCurrency: string;
  daCurrency: string;
  selectedCurrency: string;
}

export interface CurrencyExchangeRates {
  from: number;
  to: number;
  currency: string;
}
