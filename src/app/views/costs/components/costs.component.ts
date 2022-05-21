import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CostsFacade } from '../facades';

@Component({
  selector: 'costs',
  templateUrl: 'costs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CostsFacade]
})
export class CostsComponent implements OnInit {
  costs$ = this._costsFacade.costs$;

  constructor(private readonly _costsFacade: CostsFacade) {}

  ngOnInit() {
    this._costsFacade.updateCostsCurrencies();
  }
}
