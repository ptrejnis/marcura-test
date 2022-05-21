import { NgModule } from '@angular/core';
import { AmountPipe } from '@shared/amount/amount.pipe';
import {SumPipe} from "@shared/amount/sum-amount.pipe";

@NgModule({
  declarations: [AmountPipe, SumPipe],
  exports: [AmountPipe, SumPipe]
})
export class AmountModule {}
