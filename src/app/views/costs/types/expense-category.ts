import { Note } from '@shared/notes';
import { Cost } from '@shared/types';

export interface ExpenseCategory {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItem[];
}

export interface CostItem {
  id: number;
  name: string;
  costItemAlias: CostItemAlias;
  annotation: CostAnnotation;
  costs: Cost[];
  comments: Note[];
}

interface CostItemAlias {
  accountingCode: string;
}

interface CostAnnotation {
  id: number;
  name: string;
}
