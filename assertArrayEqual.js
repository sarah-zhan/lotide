const eqArrays = require('./eqArrays');

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return "They are a match.";
  } else {
    return "Not a match!";
  }
};

module.exports = assertArrayEqual;
