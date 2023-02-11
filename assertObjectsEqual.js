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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) console.log('😀 😀 😀 They are a match');
  if (!eqObjects(actual, expected)) console.log('😔 😔 😔 Not a match');

  console.log(`Example label: ${inspect(actual)}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject);
