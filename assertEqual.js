const assertEqual = function(actual, expected) {
  //use if as a filter to remove the negitive concequances first
  if (actual !== expected) {
    console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  
  //happy path
  console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
};



module.exports = assertEqual;

