import { isNullOrUndefined } from "./type.extensions";

export const Empty = "";

export function isEmpty(item: string): boolean {
  return isNullOrUndefined(item) || item === Empty;
}
