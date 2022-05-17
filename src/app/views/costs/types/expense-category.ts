import { Note } from '@shared/notes';
import { Cost } from '@shared/types';

export interface ExpenseCategory {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItem[];
  comments: Note[];
}

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
