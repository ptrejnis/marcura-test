import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MOCKS_URL } from '@utils/consts';
import { ResponseCache } from '@utils/helpers/response-cache';
import { ExchangeRates } from './types';

@Injectable({ providedIn: 'root' })
export class ExchangeRatesService extends ResponseCache<ExchangeRates> {
    constructor(private readonly _httpClient: HttpClient) {
        super();
    }

    fetch(): Observable<ExchangeRates> {
        return this._httpClient.get<ExchangeRates>(
            `${MOCKS_URL}/exchange-rates.json`,
        );
    }
}
