# @immutable-array/reverse

Immutable [`Array.prototype.reverse()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/reverse

## Usage

Same API with [`Array.prototype.reverse()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).

```ts
/**
 * Reverses the elements in an Array.
 * @param array base array
 */
export declare function reverse<T>(array: Array<T>): Array<T>;
```

## Example

```js
import { reverse } from "@immutable-array/reverse"
assert.deepStrictEqual(reverse(["a", "b", "c", "d", "e"]), ["e", "d", "c", "b", "a"]);
assert.deepStrictEqual(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(reverse([true, Infinity, undefined, undefined, "NaN", "-1"]), [
    "-1",
    "NaN",
    undefined,
    undefined,
    Infinity,
    true
]);
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
