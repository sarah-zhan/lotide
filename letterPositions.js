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
  for (let letter of sentenceSplit) {
    //get the index of letter
    //add them to the key as the value
    results[letter] = sentenceSplit.indexOf(letter);
  }
  return results;
};

//console.log(letterPositions("hello jane"));
assertArrayEqual(letterPositions("hello").e, [1]);