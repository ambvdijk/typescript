import { extensions } from "./extensions";

/**
 * Throws an exception when item is null or undefined
 * @param item the item to validate
 * @param errorMessage The error message when when validation fails
 */
export function isNotNullOrUndefined<T>(item: T | null | undefined, errorMessage: string): item is T {
  if (extensions.type.isNullOrUndefined(item)) {
    throw Error(errorMessage);
  }

  return true;
}

/**
 * Throws an exception when item is not a string or the string is empty
 * @param item the item to validate
 * @param errorMessage The error message when when validation fails
 */
export function isNotEmptyString(item: unknown, errorMessage: string): item is string {
  if (!extensions.type.isString(item) || extensions.string.isEmpty(item)) {
    throw Error(errorMessage);
  }
  return true;
}

/**
 * Throws an exception when item is not a string or the string is empty
 * @param item the item to validate
 * @param argumentName The name of the argument being validated
 */
export function argumentIsNotNullOrUndefined<T>(item: T | null | undefined, argumentName: string): item is T {
  return isNotNullOrUndefined(item, `Argument ${argumentName} cannot be null or undefined`);
}

/**
 * Throws an exception when item is not a string or the string is empty
 * @param item the item to validate
 * @param argumentName The name of the argument being validated
 */
export function argumentIsNotEmptyString(item: unknown, argumentName: string): item is string {
  return isNotEmptyString(item, `Argument ${argumentName} cannot be an empty string`);
}
