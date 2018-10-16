const snakeCase = function(string) {
  // Definitely had to go to the solution for this one.
  // Regex is not a skill that I have at this time..
  
  // wtf case
  string = string.replace(/\.\./g, " ");

  // this splits up camelcase IF there are no spaces in the word
  if (string.indexOf(" ") < 0) {
    string = string.replace(/([A-Z])/g, " $1");
  }

  return string
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\-/g, " ")
    .split(" ")
    .join("_");
}

module.exports = snakeCase
