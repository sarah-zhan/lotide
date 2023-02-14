const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("They are a match.");
  } else {
    console.log("Not a match!");
  }
};

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

// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArrayEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArrayEqual(map(words, word => word[0])[0], ['g']);
assertArrayEqual(map(words, word => word[0])[1], ['c']);
assertArrayEqual(map(words, word => word[0])[2], ['t']);
assertArrayEqual(map(words, word => word[0])[3], ['m']);
assertArrayEqual(map(words, word => word[0])[4], ['t']);