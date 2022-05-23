import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cost } from '@shared/types';
import { CostOption, CostType } from '@shared/cost-type';
import { ExchangeRatesFacade } from '@shared/exchange-rates';

@Component({
  selector: 'costs-calculations',
  templateUrl: 'costs-calculations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsCalculationsComponent {
  @Input() costs: Cost[] = [];
  @Input() costType: CostType = 'Quoted';
  @Input() isSum = false;

  get costOption(): CostOption {
    return this.isSum ? 'sum' : 'singleValue';
  }

  daToSelectedExchangeCurrency$ = this._exchangeRatesFacade.daToSelectedExchangeCurrency$;
  daToBaseExchangeCurrency$ = this._exchangeRatesFacade.daToBaseExchangeCurrency$;

  constructor(private readonly _exchangeRatesFacade: ExchangeRatesFacade) {}
}
