const { assert } = require('chai');
const middle = require('../middle');
const chai = require('chai').assert;

describe('#middle', () => {
  it('should return 2, 3 when pass 1, 2, 3, 4', () => {
    const actual = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(actual), expected);
  });

  it('should return 2 when pass 1, 2, 3', () => {
    const actual = [1, 2, 3];
    const expected = [2];
    assert.deepEqual(middle(actual), expected);
  });

  it('should return [] when pass [1, 2]', () => {
    const actual = [1, 2];
    const expected = [];
    assert.deepEqual(middle(actual), expected);
  });

  it('should return [] when pass 9', () => {
    const actual = [9];
    const expected = [];
    assert.deepEqual(middle(actual), expected);
  });
  
  it('should return [] when pass []', () => {
    const actual = [];
    const expected = [];
    assert.deepEqual(middle(actual), expected);
  });

});


