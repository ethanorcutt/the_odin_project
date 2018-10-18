const repeatString = function(string, numOfTimes) {
  let repeated = '';

  if (numOfTimes >= 0) {
    while(numOfTimes) {
        repeated += string;
        numOfTimes--;
      }
  }
  else {
    repeated = 'ERROR';
  }
  
  return repeated;
}

module.exports = repeatString