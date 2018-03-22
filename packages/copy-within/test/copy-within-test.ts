// MIT © 2017 azu
import * as assert from "assert";
import { copyWithin } from "../src/copy-within";

describe("copyWithin", () => {
    it("should return immutable array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = copyWithin(originalArray, 0, originalArray.length - 1);
        assert.ok(originalArray !== resultArray);
    });

    it("can copyWithin empty array", () => {
        const originalArray: any[] = [];
        assert.deepStrictEqual(originalArray.copyWithin(0, 0), []);
    });

    it("should be idempotent - x() === x()", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        assert.deepStrictEqual(copyWithin(originalArray, -2, 1), copyWithin(originalArray, -2, 1));
    });

    it("should work copyWithin", () => {
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
        const originalArray = [1, 2, 3, 4, 5];
        assert.deepStrictEqual(copyWithin(originalArray, -2, 0), [1, 2, 3, 1, 2]);
        assert.deepStrictEqual(copyWithin(originalArray, 0, 3), [4, 5, 3, 4, 5]);
        assert.deepStrictEqual(copyWithin(originalArray, 0, 3, 4), [4, 2, 3, 4, 5]);
        assert.deepStrictEqual(copyWithin(originalArray, 0, -2, -1), [4, 2, 3, 4, 5]);
    });
    it("should copyWithin to Array-like", () => {
        const arrayLike = { length: 5, 3: 1 };
        let actual = copyWithin(arrayLike as any, 0, 3);
        assert.deepStrictEqual(actual, [1, , , 1, ,]);
    });
});
