import { Persona } from '@shared/types/persona';
import { DaStage } from './da-stage';

export interface Cost {
  daStage: DaStage;
  persona: Persona;
  type: CostType;
  amount: number;
}

export type CostType = 'Quoted' | 'Screened';
