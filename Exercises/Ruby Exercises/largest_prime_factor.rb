require 'prime'

def flatten(values)
  values_two = []

  values.each do |x|
    values_two.push(x[0])
  end

  values_two
end

puts(flatten(600851475143.prime_division).sort.reverse.first)