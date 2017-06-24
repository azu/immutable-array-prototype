// MIT © 2017 azu
import { sort } from "../src/sort";
import * as assert from "assert";

describe("sort", () => {
    it("should return immutable array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = sort(originalArray);
        assert.ok(originalArray !== resultArray);
    });

    it("can sort empty array", () => {
        assert.deepStrictEqual(sort([]), []);
    });

    it("should be idempotent - x() === x()", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        assert.deepStrictEqual(sort(originalArray), sort(originalArray));
    });
    describe("default sort", () => {
        it("should sort in ascending by ASCII character order.", () => {
            assert.deepStrictEqual(sort(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"]);
            assert.deepStrictEqual(sort(["e", "a", "c", "b", "d"]), ["a", "b", "c", "d", "e"]);
            assert.deepStrictEqual(sort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
            assert.deepStrictEqual(sort([5, 2, 4, 3, 1]), [1, 2, 3, 4, 5]);
            assert.deepStrictEqual(sort(["1", "10", "2"]), ["1", "10", "2"]);
            assert.deepStrictEqual(sort(["10", "2", "1"]), ["1", "10", "2"]);
        });
    });
    describe("custom sort", () => {
        it("sorts numeric array (ascending)", () => {
            // https://github.com/georapbox/immutable-arrays/blob/master/test/immutable-sort.spec.js
            const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
            const resultArray = sort(numberArray, (a, b) => a - b);
            assert.deepStrictEqual(resultArray, [-3, 0, 1, 3, 4, 5, 10, 20]);
        });

        it("sorts numeric array (descending)", () => {
            const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
            const resultArray = sort(numberArray, (a, b) => b - a);
            assert.deepStrictEqual(resultArray, [20, 10, 5, 4, 3, 1, 0, -3]);
        });

        it("sorts string array (with compareFunction) (descending)", () => {
            const stringArray = ["Blue", "Humpback", "Beluga"];
            const resultArray = sort(stringArray, (a, b) => a.toLowerCase() < b.toLowerCase());
            assert.deepStrictEqual(resultArray, ["Humpback", "Blue", "Beluga"]);
        });
    });
});
