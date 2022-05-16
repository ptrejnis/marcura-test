import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RootRoutes } from '@shared/routes';

const routes: Routes = [
    {
        path: '',
        redirectTo: RootRoutes.CostItems,
        pathMatch: 'full',
    },
    {
        path: RootRoutes.CostItems,
        loadChildren: () =>
            import('./views/cost-items/cost-items.module').then(
                (m) => m.CostItemsModule,
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
