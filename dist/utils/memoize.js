"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        try {
            const key = JSON.stringify(args);
            if (!cache.has(key)) {
                cache.set(key, fn(...args));
            }
            return cache.get(key);
        }
        catch (_a) {
            return fn(...args);
        }
    };
}
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map