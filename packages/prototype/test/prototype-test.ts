// MIT © 2017 azu
import * as assert from "assert";
import { sort, unshift, push, fill, splice, pop, reverse, copyWithin, shift } from "../src/prototype";

describe("prototype", () => {
    it("shift", () => {
        assert.deepStrictEqual(shift(["a", "b", "c", "d", "e"]), ["b", "c", "d", "e"]);
    });
    it("unshift", () => {
        assert.deepStrictEqual(unshift(["a", "b", "c", "d", "e"], "x"), ["x", "a", "b", "c", "d", "e"]);
    });
    it("pop", () => {
        assert.deepStrictEqual(pop(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d"]);
    });
    it("push", () => {
        assert.deepStrictEqual(push(["a", "b", "c", "d", "e"], "x"), ["a", "b", "c", "d", "e", "x"]);
    });
    it("splice", () => {
        assert.deepStrictEqual(splice(["a", "b", "c", "d", "e"], 0, 1, "x"), ["x", "b", "c", "d", "e"]);
    });
    it("sort", () => {
        assert.deepStrictEqual(sort(["e", "a", "c", "b", "d"]), ["a", "b", "c", "d", "e"]);
    });
    it("reverse", () => {
        assert.deepStrictEqual(reverse(["a", "b", "c", "d", "e"]), ["e", "d", "c", "b", "a"]);
    });
    it("fill", () => {
        assert.deepStrictEqual(fill(new Array(5), "x"), ["x", "x", "x", "x", "x"]);
    });
    it("copyWithin", () => {
        assert.deepStrictEqual(copyWithin(["a", "b", "c", "d", "e"], 0, 3, 4), ["d", "b", "c", "d", "e"]);
    });
});
