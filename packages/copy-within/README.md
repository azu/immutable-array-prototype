# @immutable-array/copy-within

Immutable [`Array.prototype.copyWithin()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/copy-within

## Usage

Same API with [`Array.prototype.copyWithin()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

```ts
/**
 * Returns the this object after copying a section of the array identified by start and end
 * to the same array starting at position target
 * @param array Base array
 * @param target If target is negative, it is treated as length+target where length is the
 * length of the array.
 * @param start If start is negative, it is treated as length+start. If end is negative, it
 * is treated as length+end.
 * @param end If not specified, length of the this object is used as its default value.
 */
export declare function copyWithin<T>(array: Array<T>, target: number, start: number, end?: number): Array<T>;
```

## Example

```js
import { copyWithin } from "@immutable-array/copyWithin";
const originalArray = [1, 2, 3, 4, 5];
assert.deepStrictEqual(copyWithin(originalArray, -2), [1, 2, 3, 1, 2]);
assert.deepStrictEqual(copyWithin(originalArray, 0, 3), [4, 5, 3, 4, 5]);
assert.deepStrictEqual(copyWithin(originalArray, 0, 3, 4), [4, 2, 3, 4, 5]);
assert.deepStrictEqual(copyWithin(originalArray, 0, -2, -1), [4, 2, 3, 4, 5]);
```

TODO: Array-like.

This is not specified behavior.

If you interesting in this, Please comment to [copyWithIn() with Array-like · Issue #20 · azu/immutable-array-prototype](https://github.com/azu/immutable-array-prototype/issues/20 "copyWithIn() with Array-like · Issue #20 · azu/immutable-array-prototype").

```js
import { copyWithin } from "@immutable-array/copyWithin";
const arrayLike = { length: 5, 3: 1 };
let actual = copyWithin(arrayLike, 0, 3);
assert.deepStrictEqual(actual, [1, , , 1,]);
```

## Changelog

See [Releases page](https://github.com/azu/immutable-array-prototype/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

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
