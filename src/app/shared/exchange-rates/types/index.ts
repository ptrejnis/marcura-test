export interface ExchangeRates {
  sourceCurrency: string;
  paymentCurrencies: PaymentCurrency[];
}

export interface PaymentCurrency {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}

export interface CurrencyConverter extends PaymentCurrency {
  amount: number;
}
