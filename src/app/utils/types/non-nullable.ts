import { isArray } from './is-array';

export function notNullable<T>(v: unknown): v is NonNullable<T> {
  return v !== undefined && v !== null;
}

export function notEmptyArray<T>(v: unknown): v is T[] {
  return isArray(v) && Boolean(v.length);
}

export function isEmptyArray(v: unknown): v is [] {
  return !notEmptyArray(v);
}

export function notEmptyObject<T>(v: unknown): v is T {
  return notNullable(v) && v !== null && typeof v === 'object' && notEmptyArray(Object.keys(v));
}
