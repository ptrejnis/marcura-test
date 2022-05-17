import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CostsResponse } from '../types';
import { CostsService } from '../services';

@Injectable({ providedIn: 'root' })
export class CostsResolver implements Resolve<CostsResponse> {
  constructor(private readonly _costsService: CostsService) {}

  resolve(): Observable<CostsResponse> {
    return this._costsService.getCosts();
  }
}
