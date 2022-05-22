import { Pipe, PipeTransform } from '@angular/core';

import { Cost } from '@shared/types';
import { isEmptyArray } from '@utils/types';
import { CostType } from './types';

@Pipe({ name: 'costType' })
export class CostTypePipe implements PipeTransform {
  transform(costs: Cost[], costType: CostType, opt: 'single' | 'sum' = 'single'): Cost['amount'] {
    switch (opt) {
      case 'single':
        return costs.find(({ type }) => type === costType)?.amount ?? 0;
        break;
      case 'sum':
        return sumCosts(costs, costType);
        break;
      default:
        const exhaustiveCheck: never = opt;
        throw new Error(`${exhaustiveCheck} opt do not exist`);
        return 0;
    }
  }
}

function sumCosts(costs: Cost[], costType: CostType): number {
  const costsByType = costs.filter(({ type }) => type === costType);
  if (isEmptyArray(costsByType)) {
    return 0;
  }
  return costsByType.map(({ amount }) => amount).reduce((curr, next) => curr + next, 0);
}
