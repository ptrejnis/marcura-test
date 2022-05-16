import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostItemsComponent } from './components';
import { CostItemsRoutingModule } from './cost-items-routing.module';

@NgModule({
    declarations: [CostItemsComponent],
    imports: [CommonModule, CostItemsRoutingModule],
})
export class CostItemsModule {}
