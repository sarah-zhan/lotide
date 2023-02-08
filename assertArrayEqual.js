// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};


const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("They are a match.");
  } else {
    console.log("Not a match!");
  }
};


assertArrayEqual([1, 2, 3], [3, 2, 1]);
assertArrayEqual([3, 2, 1], [3, 2, 1]);