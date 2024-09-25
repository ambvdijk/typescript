import { describe, expect, it } from "vitest";
import {
  isNotNullOrUndefined,
  isNull,
  isNullOrUndefined,
  isObject,
  isString,
  isTypeOf,
  isUndefined,
  typeOfFunction,
  typeOfNull,
  typeOfNumber,
  typeOfObject,
  typeOfString,
  typeOfUndefined,
} from "./type.extensions";

const testMap: { type: string; item: unknown }[] = [
  { type: typeOfString, item: "text" },
  { type: typeOfNull, item: null },
  { type: typeOfNumber, item: 0 },
  { type: typeOfObject, item: new Object() },
  { type: typeOfUndefined, item: undefined },
  { type: typeOfFunction, item: () => true },
];

describe("type.extensions", () => {
  describe("isTypeOf", () => {
    describe.each(testMap.map(({ type }) => ({ expectedType: type })))(
      "isTypeOf: $expectedType",
      ({ expectedType }) => {
        it.each(
          testMap.map(({ type, item }) => ({
            actualType: type,
            expectedType,
            item,
            expectation: expectedType === type,
          }))
        )("isTypeOf($item, $expectedType) -> $expectation", ({ item, expectation }) => {
          expect(isTypeOf(item, expectedType)).toBe(expectation);
        });
      }
    );
  });
  describe("isObject", () => {
    const tests: { item: unknown; expected: boolean }[] = [
      { item: "test", expected: false },
      { item: null, expected: false },
      { item: undefined, expected: false },
      { item: [], expected: false },
      { item: new Object(), expected: true },
      { item: {}, expected: true },
      { item: () => true, expected: false },
      { item: 0, expected: false },
    ];
    it.each(tests)("isObject($item) -> $expected", ({ item, expected }) => {
      expect(isObject(item)).toBe(expected);
    });
  });
  describe("isString", () => {
    const tests: { item: unknown; expected: boolean }[] = [
      { item: "test", expected: true },
      { item: "", expected: true },
      { item: " ", expected: true },
      { item: [], expected: false },
      { item: null, expected: false },
      { item: undefined, expected: false },
      { item: new Object(), expected: false },
      { item: {}, expected: false },
      { item: () => true, expected: false },
      { item: 0, expected: false },
    ];
    it.each(tests)("isString($item) -> $expected", ({ item, expected }) => {
      expect(isString(item)).toBe(expected);
    });
  });
  describe("isUndefined", () => {
    const tests: { item: unknown; expected: boolean }[] = [
      { item: "test", expected: false },
      { item: "", expected: false },
      { item: [], expected: false },
      { item: null, expected: false },
      { item: undefined, expected: true },
      { item: new Object(), expected: false },
      { item: {}, expected: false },
      { item: () => true, expected: false },
      { item: 0, expected: false },
    ];
    it.each(tests)("isUndefined($item) -> $expected", ({ item, expected }) => {
      expect(isUndefined(item)).toBe(expected);
    });
  });
  describe("isNull", () => {
    const tests: { item: unknown; expected: boolean }[] = [
      { item: "test", expected: false },
      { item: "", expected: false },
      { item: [], expected: false },
      { item: null, expected: true },
      { item: undefined, expected: false },
      { item: new Object(), expected: false },
      { item: {}, expected: false },
      { item: () => true, expected: false },
      { item: 0, expected: false },
    ];
    it.each(tests)("isNull($item) -> $expected", ({ item, expected }) => {
      expect(isNull(item)).toBe(expected);
    });
  });
  describe("isNullOrUndefined", () => {
    const tests: { item: unknown; expected: boolean }[] = [
      { item: "test", expected: false },
      { item: "", expected: false },
      { item: [], expected: false },
      { item: null, expected: true },
      { item: undefined, expected: true },
      { item: new Object(), expected: false },
      { item: {}, expected: false },
      { item: () => true, expected: false },
      { item: 0, expected: false },
    ];
    it.each(tests)("isNullOrUndefined($item) -> $expected", ({ item, expected }) => {
      expect(isNullOrUndefined(item)).toBe(expected);
    });
  });
  describe("isNotNullOrUndefined", () => {
    const tests: { item: unknown; expected: boolean }[] = [
      { item: "test", expected: true },
      { item: "", expected: true },
      { item: [], expected: true },
      { item: null, expected: false },
      { item: undefined, expected: false },
      { item: new Object(), expected: true },
      { item: {}, expected: true },
      { item: () => true, expected: true },
      { item: 0, expected: true },
    ];
    it.each(tests)("isNotNullOrUndefined($item) -> $expected", ({ item, expected }) => {
      expect(isNotNullOrUndefined(item)).toBe(expected);
    });
  });
});
