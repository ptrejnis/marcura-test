import { CostsCurrency } from './costs-currency';
import { ExpenseCategory } from './expense-category';

export interface CostsResponse {
    daCurrency: Pick<CostsCurrency, 'currency'>;
    baseCurrency: CostsCurrency;
    costs: ExpenseCategory[];
}
