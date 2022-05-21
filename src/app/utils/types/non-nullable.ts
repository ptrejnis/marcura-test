import { isArray } from './is-array';

type Nullable = undefined | null;

export function notNullable<T>(v: unknown): v is NonNullable<T> {
  return v !== undefined && v !== null;
}

export function notEmptyObject<T>(v: unknown): v is T {
  return notNullable(v) && v !== null && typeof v === 'object' && notEmptyArray(Object.keys(v));
}

export function notEmptyArray<T>(v: unknown): v is T[] {
  return isArray(v) && Boolean(v.length);
}

export function isNullable(v: unknown): v is Nullable {
  return !notNullable(v);
}

export function isEmptyArray(v: unknown): v is [] {
  return !notEmptyArray(v);
}
