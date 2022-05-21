import { NgModule } from '@angular/core';
import { CostTypePipe } from '@shared/cost-type/cost-type.pipe';

@NgModule({
  declarations: [CostTypePipe],
  exports: [CostTypePipe]
})
export class CostTypeModule {}
