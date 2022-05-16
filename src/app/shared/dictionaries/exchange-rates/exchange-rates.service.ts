import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MOCKS_URL } from '@utils/consts/mocks';
import { ExchangeRates } from './types';

@Injectable({ providedIn: 'root' })
export class ExchangeRatesService {
    constructor(private readonly _httpClient: HttpClient) {}

    getExchangeRates(): Observable<ExchangeRates> {
        return this._httpClient.get<ExchangeRates>(
            `${MOCKS_URL}/exchange-rates.json`,
        );
    }
}
