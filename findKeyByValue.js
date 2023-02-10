const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = (objestItem, word) => {
  //loop through object value
  for (const key of Object.keys(objestItem)) {
    //if there is match
    if (objestItem[key] === word) {
      //return the key
      return key;
    }
  }
  return undefined;

};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);