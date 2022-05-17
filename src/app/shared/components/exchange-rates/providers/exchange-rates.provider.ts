import { InjectionToken } from '@angular/core';

export interface ExchangeRatesConfig {
    baseCurrency: string;
}

export const EXCHANGE_RATES_CONFIG = new InjectionToken<ExchangeRatesConfig>(
    'exchange-rates.config',
    {
        providedIn: 'root',
        factory: () => ({
            baseCurrency: '',
        }),
    },
);
