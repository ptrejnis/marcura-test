import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, pluck } from 'rxjs';

import {
    ExchangeRates,
    PaymentCurrency,
} from '@shared/dictionaries/exchange-rates';

const BASE_CURRENCY: PaymentCurrency = {
    fromCurrency: '',
    toCurrency: '',
    exchangeRate: 0,
};

@Injectable()
export class ExchangeRatesFacade {
    readonly exchangeRates$: Observable<ExchangeRates> = this._route.data.pipe(
        pluck('exchangeRates'),
    );
    readonly baseCurrency$: BehaviorSubject<PaymentCurrency> = new BehaviorSubject(
        BASE_CURRENCY,
    );

    constructor(private readonly _route: ActivatedRoute) {}
}
