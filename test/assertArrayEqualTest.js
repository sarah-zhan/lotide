const chai = require('chai').assert;
const { assert } = require('chai');
const assertArrayEqual = require('../assertArrayEqual');

describe('#assertArrayEqual', () => {
  it('should return they are a match when pass the same array', () => {
    assert.strictEqual(assertArrayEqual([1, 2, 3], [1, 2, 3]), 'They are a match.');
  });
  it('should return not a match when pass different arrays', () => {
    assert.strictEqual(assertArrayEqual([3, 2, 1], [1, 2, 3]), 'Not a match!');
  });
});
