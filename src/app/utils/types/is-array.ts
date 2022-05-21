export function isArray(v: unknown): v is [] {
  return Array.isArray(v) && v.length >= 0;
}
