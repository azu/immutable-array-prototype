// MIT © 2017 azu
import { shift } from "../src/shift";
import * as assert from "assert";

describe("shift", () => {
    it("should return empty array when shift empty array", () => {
        const originalArray: any[] = [];
        const resultArray = shift(originalArray);
        assert.deepStrictEqual(resultArray, []);
    });
    it("should return shifted array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = shift(originalArray);
        assert.deepStrictEqual(resultArray, ["b", "c", "d", "e"]);
    });
    it("should return immutable result array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = shift(originalArray);
        assert.ok(originalArray !== resultArray);
    });
    it("should be idempotent - x() === x()", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        assert.deepStrictEqual(shift(originalArray), shift(originalArray));
    });
});
