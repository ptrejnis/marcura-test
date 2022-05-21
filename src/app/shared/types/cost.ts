import { Persona } from '@shared/types/persona';
import { DaStage } from './da-stage';
import { CostType } from '@shared/cost-type';

export interface Cost {
  daStage: DaStage;
  persona: Persona;
  type: CostType;
  amount: number;
}
