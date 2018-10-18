$sum = 0
$number_of_runs = 1000
$fibonacci_numbers = []

# The ultimate solution!
def fibonacci(n)
  curr = 1
  prev = 1
  # curr and prev already seeded at 1, 1. so current fib is 2
  current_fib = 2

  while current_fib < n
    # hold curr so its not forgotten
    temp = curr

    # by definition, fib is sum of the two prev
    curr += prev

    # prev gets the old curr
    prev = temp

    # current_fib = current_fib + 1
    current_fib += 1
  end

  curr
end

n = 1
until $fibonacci_numbers.last.to_i > 4000000
  $fibonacci_numbers.push(fibonacci(n)) if n > 1
  n += 1
end

# $fibonacci_numbers.pop() if $fibonacci_numbers.last.to_i > 4000000

# $fibonacci_numbers.each {|x| puts x if x % 2 == 0}

$fibonacci_numbers.each {|x| $sum += x if x % 2 == 0}

puts($sum)