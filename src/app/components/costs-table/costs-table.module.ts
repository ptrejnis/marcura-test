import { NgModule } from '@angular/core';
import { CostsTableComponent } from './costs-table.component';
import { CommonModule } from '@angular/common';
import { CostTypeModule } from '@shared/cost-type';
import { ExchangeRatesModule } from '@shared/exchange-rates';
import { AmountModule } from '@shared/amount';
import { FixedIntegerModule } from '@shared/fixed-integer';

@NgModule({
  declarations: [CostsTableComponent],
  imports: [CommonModule, CostTypeModule, ExchangeRatesModule, AmountModule, FixedIntegerModule],
  exports: [CostsTableComponent]
})
export class CostsTableModule {}
