import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CostsService } from '../services';

@Component({
    selector: 'costs',
    templateUrl: 'costs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostsComponent {
    costs$ = this.costsService.getCosts();

    constructor(private readonly costsService: CostsService) {}
}
