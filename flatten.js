const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const flatten = array => {
  let newArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flatten(element));
    } else {
      newArray.push(element); //must use else statement
    }
  }

  return newArray;

};

console.log(assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true));

//flat() solution
//return array.flat(Infinity);