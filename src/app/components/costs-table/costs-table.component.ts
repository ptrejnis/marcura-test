import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExpenseCategory } from '@views/costs/types';
import { ExchangeRatesFacade } from '@shared/exchange-rates/facades';

@Component({
  selector: 'costs-table',
  templateUrl: 'costs-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsTableComponent {
  @Input() expenseCategory: ExpenseCategory;

  daToSelectedExchangeCurrency$ = this._exchangeRatesFacade.daToSelectedExchangeCurrency$;
  daToBaseExchangeCurrency$ = this._exchangeRatesFacade.daToBaseExchangeCurrency$;

  get allCosts() {
    return this.expenseCategory.costItems.flatMap(i => i?.costs);
  }

  constructor(private readonly _exchangeRatesFacade: ExchangeRatesFacade) {}
}
