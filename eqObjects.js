const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //loop through object1
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    let value1 = object1[key];
    let value2 = object2[key];
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false