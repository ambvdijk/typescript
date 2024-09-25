import { describe, expect, it } from "vitest";
import { isEmpty } from "./string.extensions";

describe("string.extensions", () => {
  const tests: { item: unknown; expected: boolean }[] = [
    { item: "test", expected: false },
    { item: "", expected: true },
    { item: " ", expected: false },
    { item: [], expected: false },
    { item: null, expected: true },
    { item: undefined, expected: true },
    { item: new Object(), expected: false },
    { item: {}, expected: false },
    { item: () => false, expected: false },
    { item: 0, expected: false },
  ];
  it.each(tests)("isEmpty($item) -> $expected", ({ item, expected }) => {
    expect(isEmpty(item as unknown as string)).toBe(expected);
  });
});
