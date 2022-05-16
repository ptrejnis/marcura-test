import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsComponent } from './components';
import { CostsRoutingModule } from './costs-routing.module';

@NgModule({
    declarations: [CostsComponent],
    imports: [CommonModule, CostsRoutingModule],
})
export class CostsModule {}
