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



// const without = function(arr, itemsToRemove) {
//   if (!Array.isArray(arr) || !Array.isArray(itemsToRemove)) {
//     return [];
//   }
//   let output;

//   output = arr.filter(word => {
//     if (!itemsToRemove.includes(word)) {
//       return word;
//     }
//   });
//   return output;
// };


const without = function (source, itemsToRemove) {
  const results = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      results.push(item)
    }
  }

  return results;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(words);
// Make sure the original array was not altered by the without function
assertArrayEqual(without(words, ["lighthouse"]), ["hello", "world"]);