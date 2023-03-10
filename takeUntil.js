const takeUntil = function(array, callback) {
  const newArray = [];

  for (let item of array) {
    //const result = callback(item)
    if (callback(item)) {
      return newArray;
    }
    
    newArray.push(item);
  }
  return newArray;
};













const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);