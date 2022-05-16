import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CostsService } from '../services';

@Component({
    selector: 'cost-items',
    templateUrl: 'cost-items.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostItemsComponent {
    costs$ = this.costsService.getItems();

    constructor(private readonly costsService: CostsService) {}
}
