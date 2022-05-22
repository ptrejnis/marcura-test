import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRatesModule } from '@shared/exchange-rates';
import { CostsTableModule } from '@components/costs/costs-table';
import { CostsComponent } from './components';
import { CostsRoutingModule } from './costs-routing.module';

@NgModule({
  declarations: [CostsComponent],
  imports: [CommonModule, CostsRoutingModule, ExchangeRatesModule, CostsTableModule]
})
export class CostsModule {}
