import { Pipe, PipeTransform } from '@angular/core';

import { decimalCalculation } from '@utils/helpers';
import { ExchangeRatesPair } from '../types';

@Pipe({ name: 'exchange' })
export class ExchangePipe implements PipeTransform {
  transform(value: number, exchangeRates: ExchangeRatesPair): number {
    const { fromCurrency, toCurrency } = exchangeRates;

    return decimalCalculation(value * fromCurrency.exchangeRate * toCurrency.exchangeRate);
  }
}
