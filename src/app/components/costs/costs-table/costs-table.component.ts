import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ExpenseCategory } from '@views/costs/types';
import { Cost } from '@shared/types';

@Component({
  selector: 'costs-table',
  templateUrl: 'costs-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsTableComponent {
  @Input() expenseCategory: ExpenseCategory;

  get allCosts(): Cost[] {
    return this.expenseCategory.costItems.flatMap((i) => i?.costs);
  }
}
