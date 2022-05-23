import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';

import { CostItem, ExpenseCategory } from '@views/costs/types';
import { Cost } from '@shared/types';

@Component({
  selector: 'costs-table',
  templateUrl: 'costs-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsTableComponent {
  @Input() expenseCategory: ExpenseCategory;

  readonly trackById: TrackByFunction<CostItem> = (idx, { id }) => id;

  get allCosts(): Cost[] {
    return this.expenseCategory.costItems.flatMap((i) => i?.costs);
  }
}
