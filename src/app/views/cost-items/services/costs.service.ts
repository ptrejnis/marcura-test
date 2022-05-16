import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MOCKS_URL } from '@utils/consts/mocks';
import { ExpenseCategory } from '../types';

@Injectable({ providedIn: 'root' })
export class CostsService {
    constructor(private readonly _httpClient: HttpClient) {}

    getCosts(): Observable<ExpenseCategory> {
        return this._httpClient.get<ExpenseCategory>(`${MOCKS_URL}/costs.json`);
    }
}
