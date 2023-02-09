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

const middle = function(array) {
  let index = Math.floor(array.length / 2); //
  let middleArray = [];
  //1 or 2 elements arrray return []
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[index]);
  } else if (array.length % 2 === 0) {
    middleArray.push(array[index]);
    //console.log(middleArray)
    middleArray.push(array[index - 1]);
    //console.log(middleArray)

  }
  return middleArray;
};

console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2]));
console.log(middle([9]));

