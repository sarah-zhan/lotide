const { assert } = require('chai');
const eqArrays = require('../eqArrays');
const chai = require('chai').assert;

describe('#eqarray', () => {
  it('should return true when pass [1, 2, 3], [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false when pass [1, 2, 3], [3, 2, 1]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('should return false when pass ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
});



