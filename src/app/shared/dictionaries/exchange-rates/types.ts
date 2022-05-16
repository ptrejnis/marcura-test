export type SourceCurrency = 'SGD';

export interface ExchangeRates {
    sourceCurrency: SourceCurrency;
    paymentsCurrencies: PaymentCurrency[];
}

interface PaymentCurrency {
    fromCurrency: SourceCurrency;
    toCurrency: string;
    exchangeRate: number;
}
