const caesar = function(string, shift) {
  let charArray = string.split('');
  let shiftedArray = [];

  console.log(charArray);

  for (var i = 0; i < charArray.length; i++) {
    if(isLetter(charArray[i])) shiftedArray.push(String.fromCharCode((charArray[i].charCodeAt() + shift)));
  }
  
  return shiftedArray.join('');
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

module.exports = caesar
