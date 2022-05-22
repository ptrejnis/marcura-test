import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExchangeRatesResolver } from '@shared/exchange-rates';
import { CostsComponent } from './components';
import { CostsResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: CostsComponent,
    resolve: {
      exchangeRates: ExchangeRatesResolver,
      costs: CostsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostsRoutingModule {}
