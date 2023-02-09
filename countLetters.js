const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 😀 😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔 😔 😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      }
      else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

assertEqual(countLetters("lighthouse in the house").l, 1); 
assertEqual(countLetters("lighthouse in the house").i, 2); 
assertEqual(countLetters("lighthouse in the house").g, 1); 
assertEqual(countLetters("lighthouse in the house").h, 4); 
assertEqual(countLetters("lighthouse in the house").t, 2); 
assertEqual(countLetters("lighthouse in the house").o, 2); 
assertEqual(countLetters("lighthouse in the house").u, 2); 
assertEqual(countLetters("lighthouse in the house").s, 2); 
assertEqual(countLetters("lighthouse in the house").e, 3); 
assertEqual(countLetters("lighthouse in the house").n, 1); 

