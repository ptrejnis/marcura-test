import { BehaviorSubject } from 'rxjs';

export function updateBehaviorSubject<T>(
    baseCurrencyRate$: BehaviorSubject<T>,
    args: Partial<T>,
) {
    baseCurrencyRate$.next({ ...baseCurrencyRate$.value, ...args });
}
