const { assert } = require('chai');
const assertEqual = require('../assertEqual.js');
const chai = require('chai').assert;

describe('', () => {
  it('should return false when pass 2 different strings', () => {
    const var1 = "Lighthouse Labs";
    const var2 = "Bootcamp";
    assert.isFalse(assertEqual(var1, var2));
  });
  
  it('should return true when pass 2 same strings', () => {
    const var1 = "good";
    const var2 = "good";
    assert.isTrue(assertEqual(var1, var2));
  });

  it('should return false when pass 2 different numbers', () => {
    const var1 = 10;
    const var2 = 30;
    assert.isFalse(assertEqual(var1, var2));
  });

  it('should return true when pass 2 same numbers', () => {
    const var1 = 100;
    const var2 = 100;
    assert.isTrue(assertEqual(var1, var2));
  });

});



// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("good", "good");
// assertEqual(10, 30);