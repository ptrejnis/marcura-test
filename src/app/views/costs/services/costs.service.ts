import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MOCKS_URL } from '@utils/consts';
import { CostsResponse } from '../types';

@Injectable({ providedIn: 'root' })
export class CostsService {
  constructor(private readonly _httpClient: HttpClient) {}

  getCosts(): Observable<CostsResponse> {
    return this._httpClient.get<CostsResponse>(`${MOCKS_URL}/costs.json`);
  }
}
