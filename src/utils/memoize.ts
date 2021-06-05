import { GenericFunction } from '../types';

/**
 * Creates Memoized Function From Base Function
 * @param {Function} fn: Base Function
 * @returns {Function}: Memoized Function
 */
export function memoize<T extends unknown[], R>(fn: GenericFunction<T, R>): GenericFunction<T, R> {
  const cache = new Map();

  return (...args: T): R => {
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
