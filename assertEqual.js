const assertEqual = function(actual, expected) {
  //use if as a filter to remove the negitive concequances first
  if (actual !== expected) {
    return false;
  }
  
  //happy path
  return true;
};



module.exports = assertEqual;

