import { InjectionToken } from '@angular/core';

export interface CostsCalculationsConfig {
  amountFixedSize: number;
}

export const COSTS_CALCULATIONS_CONFIG = new InjectionToken<CostsCalculationsConfig>('costs-calculations.config', {
  providedIn: 'root',
  factory: () => ({
    amountFixedSize: 2
  })
});
