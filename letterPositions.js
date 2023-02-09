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


const letterPositions = function(sentence) {
  const results = {};
  // split the sentence
  let sentenceSplit = sentence.replace(/\s+/g, '').split('');
  //loop the sentenceSplit
  for (let i = 0; i < sentenceSplit.length; i++) {
    //check whether letter in results
    //get the index of letter
    //add them to the key as the value
    if (!results[sentenceSplit[i]]) {
      results[sentenceSplit[i]] = [i];
    } else {
      results[sentenceSplit[i]].push(i);
      
    }
  }
  return results;
};

console.log(letterPositions("hello jane"));
assertArrayEqual(letterPositions("hello").l, [1]);