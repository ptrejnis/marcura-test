import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RootRoutes } from '@shared/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: RootRoutes.Costs,
    pathMatch: 'full'
  },
  {
    path: RootRoutes.Costs,
    loadChildren: () => import('@views/costs/costs.module').then((m) => m.CostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
