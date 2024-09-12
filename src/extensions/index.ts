import {
  typeOfNull,
  typeOfUndefined,
  typeOfNumber,
  typeOfFunction,
  typeOfString,
  typeOfObject,
  isTypeOf,
  isObject,
  isString,
  isUndefined,
  isNull,
  isNullOrUndefined,
  isNotNullOrUndefined,
  hasOwnProperty,
} from "./type.extensions";

import { Empty, isEmpty } from "./string.extensions";
import { isError } from "./error.extensions";
import { empty, isNotNullOrUndefinedOrEmpty, isNullOrUndefinedOrEmpty } from "./array.extensions";

export const extensions = {
  array: {
    empty,
    isNullOrUndefinedOrEmpty,
    isNotNullOrUndefinedOrEmpty,
  },
  error: {
    isError,
  },
  string: {
    Empty,
    isEmpty,
  },
  type: {
    typeOfNull,
    typeOfUndefined,
    typeOfNumber,
    typeOfFunction,
    typeOfString,
    typeOfObject,
    isTypeOf,
    isObject,
    isString,
    isUndefined,
    isNull,
    isNullOrUndefined,
    isNotNullOrUndefined,
    hasOwnProperty,
  },
};
