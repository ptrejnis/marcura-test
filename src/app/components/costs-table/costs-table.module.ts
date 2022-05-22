import { NgModule } from '@angular/core';
import { CostsTableComponent } from './costs-table.component';
import { CommonModule } from '@angular/common';
import { CostTypeModule } from '@shared/cost-type';
import { ExchangeRatesModule } from '@shared/exchange-rates';
import { AmountModule } from '@shared/amount';
import { FixedIntegerModule } from '@shared/fixed-integer';
import { ExpansionPanelModule } from '@shared/expansion-panel';
import { NotesModule } from '@shared/notes';

@NgModule({
  declarations: [CostsTableComponent],
  imports: [
    CommonModule,
    CostTypeModule,
    ExchangeRatesModule,
    AmountModule,
    FixedIntegerModule,
    ExpansionPanelModule,
    NotesModule
  ],
  exports: [CostsTableComponent]
})
export class CostsTableModule {}
