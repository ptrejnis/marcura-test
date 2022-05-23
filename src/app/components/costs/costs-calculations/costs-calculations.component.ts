import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { Cost } from '@shared/types';
import { CostOption, CostType } from '@shared/cost-type';
import { ExchangeRatesFacade } from '@shared/exchange-rates';
import { COSTS_CALCULATIONS_CONFIG, CostsCalculationsConfig } from './costs-calculations.provider';

@Component({
  selector: 'costs-calculations',
  templateUrl: 'costs-calculations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsCalculationsComponent {
  @Input() costs: Cost[] = [];
  @Input() costType: CostType = 'Quoted';
  @Input() isSum: boolean = false;

  amountFixedSize = this._config.amountFixedSize;

  get costOption(): CostOption {
    return this.isSum ? 'sum' : 'singleValue';
  }

  daToSelectedExchangeCurrency$ = this._exchangeRatesFacade.daToSelectedExchangeCurrency$;
  daToBaseExchangeCurrency$ = this._exchangeRatesFacade.daToBaseExchangeCurrency$;

  constructor(
    @Inject(COSTS_CALCULATIONS_CONFIG) private readonly _config: CostsCalculationsConfig,
    private readonly _exchangeRatesFacade: ExchangeRatesFacade
  ) {}
}
