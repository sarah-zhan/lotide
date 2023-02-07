const assertEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

const tail = function(array1) {
  return array1.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);



