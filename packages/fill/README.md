# @immutable-array/fill

Immutable [`Array.prototype.fill()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/fill

## Usage

Same API with [`Array.prototype.fill()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

```ts
/**
 * Returns the this object after filling the section identified by start and end with value
 * @param array base array
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
export declare function fill<T>(array: Array<T>, value: T, start?: number, end?: number): Array<T>;
```

## Example

```js
import { fill } from "@immutable-array/fill" 
const originalArray = [1, 2, 3];
assert.deepStrictEqual(fill(originalArray, "x"), ["x", "x", "x"]);
assert.deepStrictEqual(fill(originalArray, "x", 1, 2), [1, "x", 3]);
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
