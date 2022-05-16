import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostItemsComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: CostItemsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CostItemsRoutingModule {}
