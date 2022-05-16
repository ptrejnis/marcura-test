import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRates } from './types';

@Injectable({ providedIn: 'root' })
export class ExchangeRatesResolver implements Resolve<ExchangeRates> {
    constructor(private readonly _exchangeRatesService: ExchangeRatesService) {}

    resolve(): Observable<ExchangeRates> {
        return this._exchangeRatesService.getCachedOrMakeRequest();
    }
}
