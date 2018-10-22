puts("What's your first name?")
first_name = gets.chomp
puts("What's your middle name?");
middle_name = gets.chomp
puts("What's your last name?");
last_name = gets.chomp
puts("Hello #{first_name} #{middle_name} #{last_name}, what's your favorite number?")
favorite_number = gets.chomp
puts("Ha! #{favorite_number.to_i + 1} is better than #{favorite_number}!")