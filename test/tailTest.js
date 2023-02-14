const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return Lighthouse Labs when pass Hello Lighthouse Labs', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});



