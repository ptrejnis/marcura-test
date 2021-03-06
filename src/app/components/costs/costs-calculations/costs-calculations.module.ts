import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostTypeModule } from '@shared/cost-type';
import { ExchangeRatesModule } from '@shared/exchange-rates';
import { AmountModule } from '@shared/amount';
import { CostsCalculationsComponent } from './costs-calculations.component';

@NgModule({
  declarations: [CostsCalculationsComponent],
  imports: [CommonModule, CostTypeModule, ExchangeRatesModule, AmountModule],
  exports: [CostsCalculationsComponent]
})
export class CostsCalculationsModule {}
