"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MIT © 2017 azu
var assert = require("assert");
var copy_within_1 = require("../src/copy-within");
describe("copyWithin", function () {
    it("should return immutable array", function () {
        var originalArray = ["a", "b", "c", "d", "e"];
        var resultArray = copy_within_1.copyWithin(originalArray, 1);
        assert.ok(originalArray !== resultArray);
    });
    it("can copyWithin empty array", function () {
        var originalArray = [];
        assert.deepStrictEqual(originalArray.copyWithin(0), []);
    });
    it("should be idempotent - x() === x()", function () {
        var originalArray = ["a", "b", "c", "d", "e"];
        assert.deepStrictEqual(originalArray.copyWithin(-2), originalArray.copyWithin(-2));
    });
    it("should work copyWithin", function () {
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
        var originalArray = [1, 2, 3, 4, 5];
        assert.deepStrictEqual(copy_within_1.copyWithin(originalArray, -2, 0), [1, 2, 3, 1, 2]);
        assert.deepStrictEqual(copy_within_1.copyWithin(originalArray, 0, 3), [4, 5, 3, 4, 5]);
        assert.deepStrictEqual(copy_within_1.copyWithin(originalArray, 0, 3, 4), [4, 2, 3, 4, 5]);
        assert.deepStrictEqual(copy_within_1.copyWithin(originalArray, 0, -2, -1), [4, 2, 3, 4, 5]);
    });
    it("should copyWithin to Array-like", function () {
        var arrayLike = { length: 5, 3: 1 };
        var actual = copy_within_1.copyWithin(arrayLike, 0, 3);
        assert.deepStrictEqual(actual, [1, , , 1, ,]);
    });
});
