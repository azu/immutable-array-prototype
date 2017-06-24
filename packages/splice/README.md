# @immutable-array/splice

Immutable [`Array.prototype.splice()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/splice

## Usage

Same API with [`Array.prototype.splice()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

```ts
/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param array Base array.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @param items Elements to insert into the array in place of the deleted elements.
 */
export declare function splice<T>(array: Array<T>, start?: number, deleteCount?: number, ...items: T[]): Array<T>;
```

### Example

Delete all:

```js
import { splice } from "@immutable-array/splice"
const originalArray = ["a", "b", "c", "d", "e"];
const resultArray = splice(originalArray, 0);
assert.deepStrictEqual(resultArray, []);
```

Delete range: 1-3

```js
import { splice } from "@immutable-array/splice"
const originalArray = ["a", "b", "c", "d", "e"];
const resultArray = splice(originalArray, 1, 3);
assert.deepStrictEqual(resultArray, ["a", "e"]);
``` 

Delete and Insert = replace index 0 with "x"

```js
import { splice } from "@immutable-array/splice"
const originalArray = ["a", "b", "c", "d", "e"];
const resultArray = splice(originalArray, 0, 1, "x");
assert.deepStrictEqual(resultArray, ["x", "b", "c", "d", "e"]);
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
