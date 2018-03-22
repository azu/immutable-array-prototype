// MIT © 2017 azu
import { splice } from "../src/splice";
import * as assert from "assert";

describe("splice", () => {
    it("should return immutable array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = splice(originalArray, 0, 1, "x");
        assert.ok(originalArray !== resultArray);
    });

    it("should return array that has same element with original: start:0 delete: 0", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = splice(originalArray, 0, 0);
        assert.deepStrictEqual(resultArray, originalArray);
    });

    describe("delete pattern", () => {
        it("should remove all elements from array, start:0", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0);
            assert.deepStrictEqual(resultArray, []);
        });
        it("should remove all elements from array, start:0 delete:length", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0, originalArray.length);
            assert.deepStrictEqual(resultArray, []);
        });
        it("should remove all elements from array, start:0 delete:length + 1", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0, originalArray.length + 1);
            assert.deepStrictEqual(resultArray, []);
        });
        it("should remove last-index -2 element from array, start:-2 delete:1", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, -2, 1);
            assert.deepStrictEqual(resultArray, ["a", "b", "c", "e"]);
        });
        it("should not remove element from array, start:0 delete:-1", () => {
            // If deleteCount is negative, use 0
            // https://github.com/tc39/test262/blob/da4f4385fdf88ff2c8acf036efaaa62f8cd6bd58/test/built-ins/Array/prototype/splice/S15.4.4.12_A1.3_T1.js
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0, -1);
            assert.deepStrictEqual(resultArray, ["a", "b", "c", "d", "e"]);
        });
        it("should remove all elements from array, start:-2 delete:-1", () => {
            // ref: https://github.com/tc39/test262/blob/da4f4385fdf88ff2c8acf036efaaa62f8cd6bd58/test/built-ins/Array/prototype/splice/S15.4.4.12_A1.2_T1.js
            const originalArray = [0, 1];
            const resultArray = splice(originalArray, -2, -1);
            assert.deepStrictEqual(resultArray, [0, 1]);
        });
        it("should remove 3 elements from array, start:1 delete:3", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 1, 3);
            assert.deepStrictEqual(resultArray, ["a", "e"]);
        });
        it("should not remove elements from array, when no arguments", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray);
            assert.deepStrictEqual(resultArray, ["a", "b", "c", "d", "e"]);
        });
    });
    describe("insert pattern", () => {
        it('should return array that first element replaced with "x"', () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0, 1, "x");
            assert.deepStrictEqual(resultArray, ["x", "b", "c", "d", "e"]);
        });
        it("should return array that inserted element at index 2", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 2, 0, "x");
            assert.deepStrictEqual(resultArray, ["a", "b", "x", "c", "d", "e"]);
        });
        it("should return array that inserted element at last-index", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, originalArray.length, 0, "x");
            assert.deepStrictEqual(resultArray, ["a", "b", "c", "d", "e", "x"]);
        });

        it("should return array that inserted multiple elements", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const addingArray = ["x", "y", "z"];
            const resultArray = splice(originalArray, 1, 0, ...addingArray);
            assert.deepStrictEqual(resultArray, ["a", "x", "y", "z", "b", "c", "d", "e"]);
        });

        it("should return array that inserted empty string", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0, 0, "");
            assert.deepStrictEqual(resultArray, ["", "a", "b", "c", "d", "e"]);
        });
        it("should return array that inserted undefined value", () => {
            const originalArray = ["a", "b", "c", "d", "e"];
            const resultArray = splice(originalArray, 0, 0, undefined);
            assert.deepStrictEqual(resultArray, [undefined, "a", "b", "c", "d", "e"]);
        });
        it("should return array that insert element and delete element - total number is not changed", () => {
            // This is often implementation issue
            // Most immutable array implementation not pass this test
            // https://github.com/micro-js/splice
            // https://vincent.billey.me/pure-javascript-immutable-array/
            // https://github.com/georapbox/immutable-arrays
            // For example, `indexOf` return -1 and use is as arguments, then occur this issue.
            const originalArray = [0, 1, 2];
            const resultArray = splice<any>(originalArray, -1, 1, "x");
            assert.deepStrictEqual(resultArray, [0, 1, "x"]);
            assert.strictEqual(originalArray.length, resultArray.length);
            // same with native
            originalArray.splice(-1, 1, "x" as any);
            assert.deepStrictEqual(originalArray, resultArray);
        });
    });
});
