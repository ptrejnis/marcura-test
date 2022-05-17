import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRatesModule } from '@shared/exchange-rates';
import { CostsComponent } from './components';
import { CostsRoutingModule } from './costs-routing.module';

@NgModule({
  declarations: [CostsComponent],
  imports: [CommonModule, CostsRoutingModule, ExchangeRatesModule]
})
export class CostsModule {}
