import { Pipe, PipeTransform } from '@angular/core';

import { CurrencyExchangeRates, ExchangeRates } from '../types';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';

@Pipe({ name: 'exchange' })
export class ExchangePipe implements PipeTransform {
  exchangeRates$: Observable<ExchangeRates> = this._route.data.pipe(pluck('exchangeRates'));

  constructor(private readonly _route: ActivatedRoute) {}

  transform(value: number, exchangeRates: CurrencyExchangeRates): number {
    return value * exchangeRates.from * exchangeRates.to;
  }
}
