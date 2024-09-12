import { isNullOrUndefined } from "./type.extensions";

export const empty = <T>(): T[] => [];

export const isNullOrUndefinedOrEmpty = <T>(value: T[] | undefined | null): boolean => {
  if (isNullOrUndefined(value)) {
    return true;
  }
  return Array.isArray(value) && !value.length;
};

export const isNotNullOrUndefinedOrEmpty = <T>(value: T[] | undefined | null): value is T[] => {
  return isNullOrUndefinedOrEmpty(value) === false;
};
