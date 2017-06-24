# immutable-array-prototype

Immutable Array prototype methods.

- TypeScript
- Small and Thin
- Per method packages
    - `@immutable-array/push`

## Why?

ECMAScript `Array` has some mutable methods.
This library provide immutable version of each methods.

### Mutable method on `Array.prototype`

| Native method: Return type               | `@immutable-array/*`                       |
| ---------------------------------------- | ---------------------------------------- |
| [`Array.prototype.copyWithin()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin): `Array`| `copyWithin()`: new `Array` |
| [`Array.prototype.fill()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill): `Array`| [`fill()`](packages/fill): new `Array` |
| [`Array.prototype.pop()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop): `any`| [`pop()`](packages/pop): new  `Array` |
| [`Array.prototype.push()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push): `Number`| [`push()`](packages/push): new  `Array` |
| [`Array.prototype.shift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift): `any`| [`shift()`](packages/shift): new  `Array` |
| [`Array.prototype.unshift()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift): `any`| [`unshift()`](packages/unshift): new  `Array` |
| [`Array.prototype.splice()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): `Array`| [`splice()`](packages/splice): new  `Array` |
| [`Array.prototype.reverse()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse): `Array`| [`reverse()`](packages/sort): new `Array` |
| [`Array.prototype.sort()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): `Array`| [`sort()`](packages/sort): new  `Array` |


## Install

Install with [npm](https://www.npmjs.com/):

    npm install @immutable-array/prototype

## Usage

```js
import { push } from "@immutable-array/prototype"
const array = [0, 1, 2];
push(array, 3); // => [0, 1, 2, 3]
console.log(array); // => [0, 1, 2]
```

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
