# @immutable-array/sort

Immutable [`Array.prototype.sort()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/sort

## Usage

Same API with [`Array.prototype.sort()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

```ts
/**
 * Sorts an array.
 * @param array Base array
 * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
 */
export declare function sort<T>(array: Array<T>, compareFn?: (a: T, b: T) => number): Array<T>;
```

## Example

Default sort:

```js
import { sort } from "@immutable-array/sort"
assert.deepStrictEqual(sort(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d", "e"]);
assert.deepStrictEqual(sort(["e", "a", "c", "b", "d"]), ["a", "b", "c", "d", "e"]);
assert.deepStrictEqual(sort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(sort([5, 2, 4, 3, 1]), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(sort(["1", "10", "2"]), ["1", "10", "2"]);
assert.deepStrictEqual(sort(["10", "2", "1"]), ["1", "10", "2"]);
```

Custom sort:

```js
import { sort } from "@immutable-array/sort"
const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
const resultArray = sort(numberArray, (a, b) => b - a);
assert.deepStrictEqual(resultArray, [20, 10, 5, 4, 3, 1, 0, -3]);
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
