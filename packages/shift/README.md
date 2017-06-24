# @immutable-array/shift

Immutable [`Array.prototype.shift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/shift

## Usage

Same API with [`Array.prototype.shift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).

```ts
/**
 * Removes the first element from an array and returns it.
 */
export declare function shift<T>(array: Array<T>): Array<T>;
```

## Example

```js
import { shift } from "@immutable-array/shift"
const originalArray = ["a", "b", "c", "d", "e"];
const resultArray = shift(originalArray);
assert.deepStrictEqual(resultArray, ["b", "c", "d", "e"]);
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
