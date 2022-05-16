import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MOCKS_URL } from '@utils/consts/mocks';

@Injectable({ providedIn: 'root' })
export class CostsService {
    constructor(private readonly _httpClient: HttpClient) {}

    getItems(): any {
        return this._httpClient.get<any>(`${MOCKS_URL}/costs.json`);
    }
}
