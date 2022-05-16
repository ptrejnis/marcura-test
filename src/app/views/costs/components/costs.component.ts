import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CostsFacade } from '../facades';

@Component({
    selector: 'costs',
    templateUrl: 'costs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CostsFacade],
})
export class CostsComponent {
    constructor(readonly costsFacade: CostsFacade) {}
}
