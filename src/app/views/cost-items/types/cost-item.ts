import { Cost } from '@shared/types';

export interface CostItem {
    id: number;
    name: string;
    costItemAlias: CostItemAlias;
    annotation: CostAnnotation;
    costs: Cost[];
}

interface CostItemAlias {
    accountingCode: string;
}

interface CostAnnotation {
    id: number;
    name: string;
}
