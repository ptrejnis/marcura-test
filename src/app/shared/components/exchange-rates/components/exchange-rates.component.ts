import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'exchange-rates',
    templateUrl: 'exchange-rates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRatesComponent {}
