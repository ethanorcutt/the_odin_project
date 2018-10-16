const palindromes = function(input) {
  processedInput = input.toLowerCase().replace(/[^A-Za-z]/g, "");
  return processedInput === processedInput.split('')
                                  .reverse()
                                  .join('') ? true : false;
}

module.exports = palindromes
