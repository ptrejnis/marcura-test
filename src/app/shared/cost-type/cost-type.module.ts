import { NgModule } from '@angular/core';

import { CostTypePipe } from './cost-type.pipe';

@NgModule({
  declarations: [CostTypePipe],
  exports: [CostTypePipe]
})
export class CostTypeModule {}
