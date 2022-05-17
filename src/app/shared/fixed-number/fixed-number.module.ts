import { NgModule } from '@angular/core';
import { FixedNumberPipe } from './fixed-number.pipe';

@NgModule({
  declarations: [FixedNumberPipe],
  exports: [FixedNumberPipe]
})
export class FixedNumberModule {}
