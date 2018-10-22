minutes_in_a_year = (60 * 24) * 365
minutes_in_a_decade = minutes_in_a_year * 10
seconds_old = (minutes_in_a_year * 60) * 23
really_old = 1298000000 / (minutes_in_a_year * 60);

puts("There are #{minutes_in_a_year} minutes in an year.")
puts("There are #{minutes_in_a_decade} minutes in an year.")
puts("I am #{seconds_old} seconds old.")
puts("You are #{really_old} years old.")