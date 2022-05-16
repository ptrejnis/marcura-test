import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsComponent } from './components';
import { CostsResolver } from '@views/costs/resolvers';
import { ExchangeRatesResolver } from '@shared/dictionaries/exchange-rates';

const routes: Routes = [
    {
        path: '',
        component: CostsComponent,
        resolve: {
            exchangeRates: ExchangeRatesResolver,
            costs: CostsResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CostsRoutingModule {}
