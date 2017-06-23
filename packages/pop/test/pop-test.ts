// MIT © 2017 azu
import * as assert from "assert";
import { pop } from "../src/pop";

describe("pop", () => {
    it("should return empty array when pop empty array", () => {
        const originalArray = [];
        const resultArray = pop(originalArray);
        assert.deepStrictEqual(resultArray, []);
    });
    it("should return popped array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = pop(originalArray);
        assert.deepStrictEqual(resultArray, ["a", "b", "c", "d"]);
    });
    it("should return immutable result array", () => {
        const originalArray = ["a", "b", "c", "d", "e"];
        const resultArray = pop(originalArray);
        assert.ok(originalArray !== resultArray);
    });
});
