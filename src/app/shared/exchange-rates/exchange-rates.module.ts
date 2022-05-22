import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FixedIntegerModule } from '@shared/fixed-integer';
import { ExchangeRatesComponent } from './components';
import { ExchangePipe } from './pipes';

@NgModule({
  declarations: [ExchangeRatesComponent, ExchangePipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FixedIntegerModule],
  exports: [ExchangeRatesComponent, ExchangePipe]
})
export class ExchangeRatesModule {}
