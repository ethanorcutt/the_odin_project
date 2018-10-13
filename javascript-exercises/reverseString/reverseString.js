const reverseString = function(string) {
  /* 
    The short and smarter way to write this is:

    return string.split('').reverse().join('')

    But I wrote my own implementation and would like
    to have it as a reference.
  */

  const originalWord = string.split('');
  let charArray = [];

  for (let x = 0; x <= string.length; x++) {
    charArray[x] = originalWord[string.length - x]
  }

  return charArray.join('')
}

module.exports = reverseString
