# naves

![Build Status](https://github.com/narekkeryan/naves/actions/workflows/node.js.yml/badge.svg)

## Powerful JavaScript Utility Library.

### Installation

```sh
npm install --save naves
```

### Documentation

**memoize**

```js
memoize<[T1, T2, ...], R>(fn);
```

Creates new function which memoizes the result of `fn`. As a cache key memoization function uses JSON.stringified result of arguments provided to memoized function. If one of arguments include circular reference than memoized function can not cache the result and calculates it in every call.

```js
import { memoize } from 'naves';

...

const memoizedFn: (...args: T) => R = memoize<[T1, T2, ...], R>(fn);

memoizedFn(...args);
```

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
