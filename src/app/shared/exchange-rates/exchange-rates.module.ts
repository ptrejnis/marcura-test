import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExchangeRatesComponent } from './components';
import { ExchangeConverterPipe } from './pipes';
import { FixedNumberModule } from '@shared/fixed-number';

@NgModule({
  declarations: [ExchangeRatesComponent, ExchangeConverterPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FixedNumberModule],
  exports: [ExchangeRatesComponent, ExchangeConverterPipe]
})
export class ExchangeRatesModule {}
