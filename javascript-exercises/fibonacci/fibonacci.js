const fibonacci = function(x) {
  if(x < 0) return 'OOPS';
  return (x <= 1) ? x : fibonacci(x-1) + fibonacci(x-2);
}

module.exports = fibonacci