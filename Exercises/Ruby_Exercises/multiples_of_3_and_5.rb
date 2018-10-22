sum = 0
maxNumber = 1000
multiples = []

maxNumber.times do |x|
  multiples.push(x) if (x % 3 == 0 || x % 5 == 0) && x != 0
end

puts(multiples.join(' '))

multiples.each {|x| sum += x}
puts(sum)