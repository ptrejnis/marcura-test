import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostTypeModule } from '@shared/cost-type';
import { ExchangeRatesModule } from '@shared/exchange-rates';
import { AmountModule } from '@shared/amount';
import { ExpansionPanelModule } from '@shared/expansion-panel';
import { NotesModule } from '@shared/notes';
import { CostsCalculationsModule } from '../costs-calculations';
import { CostsTableComponent } from './costs-table.component';

@NgModule({
  declarations: [CostsTableComponent],
  imports: [
    CommonModule,
    CostTypeModule,
    ExchangeRatesModule,
    AmountModule,
    ExpansionPanelModule,
    NotesModule,
    CostsCalculationsModule
  ],
  exports: [CostsTableComponent]
})
export class CostsTableModule {}
