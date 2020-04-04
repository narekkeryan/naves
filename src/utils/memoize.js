/**
 * Creates Memoized Function From Base Function
 * @param {Function} fn: Base Function
 * @returns {Function}: Memoized Function
 */
export function memoize(fn) {
  const cache = new Map();

  return (...args) => {
    try {
      const key = JSON.stringify(args);

      if (!cache.has(key)) {
        cache.set(key, fn(...args));
      }

      return cache.get(key);
    } catch {
      return fn(...args);
    }
  };
}
