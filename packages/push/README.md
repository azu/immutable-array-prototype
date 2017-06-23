# @immutable-array/push

Immutable [`Array.prototype.push()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/push

## Usage

Same API with [`Array.prototype.push()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

```ts
/**
 * Appends new elements to an array, and returns the new length of the array.
 * @param array base Array
 * @param items New elements of the Array.
 */
export declare function push<T>(array: Array<T>, ...items: T[]): Array<T>;
```

## Example

```js
import { push } from "@immutable-array/push";
const originalArray = ["a", "b", "c", "d", "e"];
const resultArray = push(originalArray, "f", "g");
assert.ok(originalArray !== resultArray);        
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
