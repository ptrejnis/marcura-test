import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';

import { ExchangeRates } from '@shared/dictionaries/exchange-rates';
import { CostsResponse } from '../types';

@Injectable()
export class CostsFacade {
    readonly costs$: Observable<CostsResponse> = this._route.data.pipe(pluck('costs'));
    readonly exchangeRates$: Observable<ExchangeRates> = this._route.data.pipe(pluck('exchangeRates'));

    constructor(private readonly _route: ActivatedRoute) {}
}
