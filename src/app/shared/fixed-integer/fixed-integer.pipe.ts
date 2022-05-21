import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fixedNumber' })
export class FixedIntegerPipe implements PipeTransform {
  transform(value: number, digits: number): string {
    return value.toFixed(digits);
  }
}
