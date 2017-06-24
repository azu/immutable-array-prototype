// MIT © 2017 azu
import { fill } from "../src/fill";
import * as assert from "assert";

describe("fill", () => {
    it("throw error when pass undefined as array", () => {
        assert.throws(() => {
            fill(undefined);
        }, "array is null or undefined");
    });
    it("can fill element to empty array", () => {
        const originalArray = [];
        const resultArray = fill(originalArray, "x");
        assert.deepStrictEqual(resultArray, []);
    });
    it("should return immutable result array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = fill(originalArray, 1);
        assert.ok(originalArray !== resultArray);
    });
    it("should fill all elements with value", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x"), ["x", "x", "x"]);
    });
    it("should fill elements, start:1", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", 1), [1, "x", "x"]);
    });
    it("should fill elements, start:-1", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", -1), [1, 2, "x"]);
    });
    it("should fill elements, start:1 end:2", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", 1, 2), [1, "x", 3]);
    });
    it("should fill by negative start, start:-3 end:-2 => start:0 end:1", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", -3, -2), ["x", 2, 3]);
    });
    it("should fill non-dense array", () => {
        // non-dense
        assert.deepStrictEqual(fill(Array(3), "x"), ["x", "x", "x"]);
    });
    it("should fill array-like", () => {
        assert.deepStrictEqual(fill({ length: 3 }, "x"), ["x", "x", "x"]);
    });
    it("should not fill when start === end", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", 1, 1), [1, 2, 3]);
    });
    it("should not fill when start and end is NaN", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", NaN, NaN), [1, 2, 3]);
    });

    it("should not fill when start and end is out of range", () => {
        const originalArray = [1, 2, 3];
        assert.deepStrictEqual(fill(originalArray, "x", -1, 0), [1, 2, 3]);
    });
});
