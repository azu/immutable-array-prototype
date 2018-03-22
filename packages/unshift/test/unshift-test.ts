// MIT © 2017 azu
import { unshift } from "../src/unshift";
import * as assert from "assert";

describe("unshift", () => {
    it("can unshift element to empty array", () => {
        const originalArray: string[] = [];
        const resultArray = unshift(originalArray, "a");
        assert.deepStrictEqual(resultArray, ["a"]);
    });
    it("can unshift multiple elements", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const addingArray = ["f", "g"];
        const resultArray = unshift(originalArray, ...addingArray);
        assert.deepStrictEqual(resultArray, ["f", "g", "a", "b", "c", "d", "e"]);
    });
    it("can unshift an array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const shiftingArray = ["f", "g"];
        const resultArray = unshift<any>(originalArray, shiftingArray);
        assert.deepStrictEqual(resultArray, [["f", "g"], "a", "b", "c", "d", "e"]);
    });
    it("should be idempotent - x() === x()", () => {
        const originalArray: any[] = ["a", "b", "c", "d", "e"];
        assert.deepStrictEqual(unshift(originalArray, 1), unshift(originalArray, 1));
    });
    it("should return empty array when adding empty element to empty array", () => {
        const originalArray: any[] = [];
        const resultArray = unshift(originalArray);
        assert.strictEqual(resultArray.length, 0);
    });
    it("should return immutable result array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = unshift(originalArray, "f", "g");
        assert.ok(originalArray !== resultArray);
    });
    it("should return result array have length = original + adding", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const addingArray = ["f", "g"];
        const resultArray = unshift(originalArray, ...addingArray);
        assert.strictEqual(resultArray.length, originalArray.length + addingArray.length);
    });
});
