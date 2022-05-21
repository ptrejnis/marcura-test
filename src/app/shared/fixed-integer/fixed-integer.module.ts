import { NgModule } from '@angular/core';
import { FixedIntegerPipe } from './fixed-integer.pipe';

@NgModule({
  declarations: [FixedIntegerPipe],
  exports: [FixedIntegerPipe]
})
export class FixedIntegerModule {}
