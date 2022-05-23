import { ChangeDetectionStrategy, Component, OnInit, TrackByFunction } from '@angular/core';

import { CostsFacade } from '../facades';
import { ExpenseCategory } from '../types';

@Component({
  selector: 'costs',
  templateUrl: 'costs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CostsFacade]
})
export class CostsComponent implements OnInit {
  readonly costs$ = this._costsFacade.costs$;
  readonly trackById: TrackByFunction<ExpenseCategory> = (idx, { id }) => id;

  constructor(private readonly _costsFacade: CostsFacade) {}

  ngOnInit() {
    this._costsFacade.updateCostsCurrencies();
  }
}
