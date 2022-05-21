import { CostType } from '@shared/cost-type';

export interface Cost {
  daStage: string;
  persona: string;
  type: CostType;
  amount: number;
}
