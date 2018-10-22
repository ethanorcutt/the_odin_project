def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def sum(array)
  array.sum
end

def multiply(*numbers)
  numbers.reduce(:*)
end

def power(a, x)
  a.pow(x)
end

def factorial(a)
  (1..(a.zero? ? 1 : a)).reduce(:*)
end