export const typeOfNull = "Null";
export const typeOfUndefined = "Undefined";
export const typeOfNumber = "Number";
export const typeOfFunction = "Function";
export const typeOfString = "String";
export const typeOfObject = "Object";

export const isTypeOf = (item: unknown, type: string) =>
  Object.prototype.toString.call(item) === `[object ${type}]`;

export const isObject = (item: unknown): item is Object =>
  isTypeOf(item, typeOfObject);

export const isString = (item: unknown): item is string =>
    isTypeOf(item, typeOfString);

export const isUndefined = <T>(item: T | undefined): item is undefined => isTypeOf(item, typeOfUndefined);

export const isNull = <T>(item: T | null): item is null => isTypeOf(item, typeOfNull);

export const isNullOrUndefined = <T>(item: T | null | undefined): item is null | undefined => isUndefined(item) || isNull(item);

export const isNotNullOrUndefined = <T>(item: T): item is T => isNullOrUndefined(item) === false;

export function hasOwnProperty<T, K extends PropertyKey>(
  item: T,
  prop: K
): item is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(item, prop);
}