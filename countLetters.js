const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const results = {};
const countLetters = function(sentence) {
  for (let letter of sentence) {
    if (letter !== ' ') {
      results[letter] += 1; //ask mentor
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));

assertEqual(results["l"], 1);

