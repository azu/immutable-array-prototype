# immutable-array-prototype

Immutable Array prototype methods.

- TypeScript
- Small and Thin
    - `@immutable-array/prototype` that includes all methods: 1.3 kB(gzip)
- Per method packages
    - `@immutable-array/push`, `@immutable-array/push` etc...
- Same usage with native `Array.prototype` methods

## Why?

ECMAScript `Array` has some mutable methods.

This library provide immutable version of each methods.

### Mutable method on `Array.prototype`

| Native method: Return type               | `@immutable-array/*`                       |
| ---------------------------------------- | ---------------------------------------- |
| [`Array.prototype.pop()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop): `any`| [`pop()`](packages/pop): new  `Array` |
| [`Array.prototype.push()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push): `Number`| [`push()`](packages/push): new  `Array` |
| [`Array.prototype.shift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift): `any`| [`shift()`](packages/shift): new  `Array` |
| [`Array.prototype.unshift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift): `any`| [`unshift()`](packages/unshift): new  `Array` |
| [`Array.prototype.splice()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): `Array`| [`splice()`](packages/splice): new  `Array` |
| [`Array.prototype.reverse()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse): `Array`| [`reverse()`](packages/sort): new `Array` |
| [`Array.prototype.sort()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): `Array`| [`sort()`](packages/sort): new  `Array` |
| [`Array.prototype.fill()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill): `Array`| [`fill()`](packages/fill): new `Array` |
| [`Array.prototype.copyWithin()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin): `Array`| [`copyWithin()`](packages/copy-within): new `Array` |


## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/prototype

Per method packages:

    npm install @immutable-array/pop
    npm install @immutable-array/push
    npm install @immutable-array/shift
    npm install @immutable-array/unshift
    npm install @immutable-array/sort
    npm install @immutable-array/reverse
    npm install @immutable-array/fill
    npm install @immutable-array/splice
    npm install @immutable-array/copy-within

See more details on each [package's README](./packages/).

## Usage

`@immutable-array/prototype` is a collection of immutable `Array.prototype` methods.

Basically, the usage of these method is same with mutable version.

```js
import {
    sort,
    unshift,
    push,
    fill,
    splice,
    pop,
    reverse,
    copyWithin,
    shift
} from "@immutable-array/prototype";
describe("prototype", () => {
    it("shift", () => {
        assert.deepStrictEqual(shift(["a", "b", "c", "d", "e"]), ["b", "c", "d", "e"]);
    });
    it("unshift", () => {
        assert.deepStrictEqual(unshift(["a", "b", "c", "d", "e"], "x"), [
            "x",
            "a",
            "b",
            "c",
            "d",
            "e"
        ]);
    });
    it("pop", () => {
        assert.deepStrictEqual(pop(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d"]);
    });
    it("push", () => {
        assert.deepStrictEqual(push(["a", "b", "c", "d", "e"], "x"), [
            "a",
            "b",
            "c",
            "d",
            "e",
            "x"
        ]);
    });
    it("splice", () => {
        assert.deepStrictEqual(splice(["a", "b", "c", "d", "e"], 0, 1, "x"), [
            "x",
            "b",
            "c",
            "d",
            "e"
        ]);
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

```

## Benchmarks

Benchmark that is native `Array.prototype` methods vs. `@immutable-array`

See [benchmark](packages/benchmark).
    
    Native `Array.prototype`          |    @immutable-array
    > node src/array.js |                  > immutable-array.js
                                      |
    # pop 200000 times               <<<   # pop 200000 times
    ok ~243 ms (0 s + 242726054 ns)  <<<   ok ~288 ms (0 s + 287995642 ns)
                                      |
    # push 200000 times              <<<   # push 200000 times
    ok ~43 ms (0 s + 42891286 ns)    <<<   ok ~151 ms (0 s + 151449835 ns)
                                      |
    # shift 200000 times             <<<   # shift 200000 times
    ok ~229 ms (0 s + 228985933 ns)  <<<   ok ~278 ms (0 s + 278376069 ns)
                                      |
    # unshift 200000 times           <<<   # unshift 200000 times
    ok ~51 ms (0 s + 50645359 ns)    <<<   ok ~110 ms (0 s + 109918035 ns)
                                      |
    # sort 2000 times                ===   # sort 2000 times
    ok ~563 ms (0 s + 562931038 ns)  ===   ok ~560 ms (0 s + 559704603 ns)
                                      |
    # reverse 200000 times           >>>   # reverse 200000 times
    ok ~511 ms (0 s + 511468366 ns)  >>>   ok ~439 ms (0 s + 438853725 ns)
                                      |
    # fill 200000 times              >>>   # fill 200000 times
    ok ~737 ms (0 s + 737258288 ns)  >>>   ok ~691 ms (0 s + 691079207 ns)
                                      |
    # splice 200000 times            <<<   # splice 200000 times
    ok ~273 ms (0 s + 273138691 ns)  <<<   ok ~624 ms (0 s + 623533828 ns)
                                      |
    # copyWithin 200000 times        <<<   # copyWithin 200000 times
    ok ~240 ms (0 s + 240226993 ns)  <<<   ok ~303 ms (0 s + 303090728 ns)
                                      |
    all benchmarks completed         <<<   all benchmarks completed
    ok ~2.89 s (2 s + 890272008 ns)  <<<   ok ~3.44 s (3 s + 444001672 ns)

## Support Policy

### Do

- Provide immutable version of `Array.prototype` method
- Provide each method as an module
    - e.g.) `import push from "@immutable-array/push"`
    - All prototype method: `import { push } from "@immutable-array/prototype"`

### Do not

- Add non-standard method in ECMAScript
    - e.g.) `update`, `delete`, `merge`...
- Each method depended on other method

## Related

- [Pure javascript immutable arrays](https://vincent.billey.me/pure-javascript-immutable-array/ "Pure javascript immutable arrays")
- [georapbox/immutable-arrays: Immutable versions of normally mutable array methods](https://github.com/georapbox/immutable-arrays "georapbox/immutable-arrays: Immutable versions of normally mutable array methods")
- [micnews/immutable-array-methods](https://github.com/micnews/immutable-array-methods "micnews/immutable-array-methods")
- [kolodny/immutability-helper: mutate a copy of data without changing the original source](https://github.com/kolodny/immutability-helper "kolodny/immutability-helper: mutate a copy of data without changing the original source")

## Changelog

See [Releases page](https://github.com/azu/immutable-array-prototype/releases).

## Running tests

Install devDependencies and Run `yarn test`:

    yarn test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/immutable-array-prototype/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
