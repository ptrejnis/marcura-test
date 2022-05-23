import { Pipe, PipeTransform } from '@angular/core';

const DECIMAL_SEPARATOR = '.';
const INTEGER_SEPARATOR = ',';
const REGEXP = new RegExp(/\B(?=(\d{3})+(?!\d))/g);

@Pipe({ name: 'amount' })
export class AmountPipe implements PipeTransform {
  transform(value: number): string {
    const fixedAmount: string[] = value.toFixed(2).split(DECIMAL_SEPARATOR);
    const [integer, decimal] = fixedAmount;
    const formattedInteger: string = integer.replace(REGEXP, INTEGER_SEPARATOR);

    return [formattedInteger, decimal].join(DECIMAL_SEPARATOR);
  }
}
