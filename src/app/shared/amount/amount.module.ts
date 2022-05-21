import { NgModule } from '@angular/core';
import { AmountPipe } from '@shared/amount/amount.pipe';

@NgModule({
  declarations: [AmountPipe],
  exports: [AmountPipe]
})
export class AmountModule {}
