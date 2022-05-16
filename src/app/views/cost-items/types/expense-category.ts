import { Note } from '@shared/notes';
import { CostItem } from './cost-item';

export interface ExpenseCategory {
    id: number;
    name: string;
    displayOrder: number;
    costItems: CostItem[];
    comments: Note[];
}
