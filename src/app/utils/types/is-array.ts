export function isArray(v: unknown): v is [] {
    return Array.isArray(v) && v.length >= 0;
}

export function isNotEmptyArray<T>(v: unknown): v is T[] {
    return isArray(v) && Boolean(v.length);
}