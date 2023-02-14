// const eqArrays = function(array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };


const middle = function (array) {
  let index = Math.floor(array.length / 2); //
  let middleArray = [];
  //1 or 2 elements arrray return []
  if (array.length < 3) return [];

  if (array.length % 2 !== 0) {
    middleArray.push(array[index]);
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[index]);
    middleArray.push(array[index - 1]);
  }
  return middleArray;
};



module.exports = middle;

