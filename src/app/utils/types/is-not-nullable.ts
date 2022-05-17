import { isNotEmptyArray } from './is-array';

export function isNonNullable<T>(v: unknown): v is NonNullable<T> {
    return v !== undefined || v !== null || isNotEmptyArray(v);
}
