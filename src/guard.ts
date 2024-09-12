import { extensions } from "./extensions";

export function isNotNullOrUndefined<T>(item: T | null | undefined, errorMessage: string): item is T {
  if (extensions.type.isNullOrUndefined(item)) {
    throw Error(errorMessage);
  }

  return true;
}

export function isNotEmptyString(item: unknown, errorMessage: string): item is string {
  if (!extensions.type.isString(item) || extensions.string.isEmpty(item)) {
    throw Error(errorMessage);
  }
  return true;
}

export function argumentIsNotNullOrUndefined<T>(item: T | null | undefined, argumentName: string): item is T {
  return isNotNullOrUndefined(item, `Argument ${argumentName} cannot be null or undefined`);
}

export function argumentIsNotEmptyString(item: unknown, argumentName: string): item is string {
  return isNotEmptyString(item, `Argument ${argumentName} cannot be an empty string`);
}
