import { hasOwnProperty, isObject, isString } from "./type.extensions";

export function isError(error: unknown): error is Error {
  if (!isObject(error)) {
    return false;
  }
  if (!hasOwnProperty(error, "name") || !isString(error["name"])) {
    return false;
  }
  if (!hasOwnProperty(error, "message") || !isString(error["message"])) {
    return false;
  }

  return true;
}