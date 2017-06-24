# @immutable-array/unshift

Immutable [`Array.prototype.unshift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/unshift

## Usage

Same API with [`Array.prototype.unshift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift).

```ts
/**
 * Inserts new elements at the start of an array.
 * @param array  base Array.
 * @param items  Elements to insert at the start of the Array.
 */
export declare function unshift<T>(array: Array<T>, ...items: T[]): Array<T>;
```

### Example

```js
import { unshift } from "@immutable-array/unshift"
const originalArray = ["a", "b", "c", "d", "e"];
const addingArray = ["f", "g"];
const resultArray = unshift(originalArray, ...addingArray);
assert.deepStrictEqual(resultArray, ["f", "g", "a", "b", "c", "d", "e"]);
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
