import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toFixed' })
export class FixedNumberPipe implements PipeTransform {
  transform(value: number, arg = 2): number {
    return +value.toFixed(arg);
  }
}
