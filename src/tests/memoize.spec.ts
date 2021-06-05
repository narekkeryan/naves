import { expect } from 'chai';

import { memoize } from '..';

describe('./utils/memoize.ts', () => {
  it('should return same value as original function', () => {
    const numbers = [12, 25, 144];
    const memoizedMathSqrt = memoize<[number], number>(Math.sqrt);
    const memoizedMathMax = memoize<number[], number>(Math.max);

    numbers.forEach((number) => {
      expect(Math.sqrt(number)).to.equal(memoizedMathSqrt(number));
    });

    expect(Math.max(...numbers)).to.equal(memoizedMathMax(...numbers));
  });
});
