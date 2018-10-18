const sumAll = function(x1, x2) {
  if (x1 < 0 || x2 < 0) return 'ERROR';
  if (!Number.isInteger(x1) || !Number.isInteger(x2)) return 'ERROR';

  let total = 0;

  if (x1 > x2) {
    const temp = x1;
    x1 = x2;
    x2 = temp;
  }

  for (let x = x1; x <= x2; x++) {
    total += x;
  }

  return total;
}

module.exports = sumAll
