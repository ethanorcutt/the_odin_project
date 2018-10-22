def echo(string)
  string
end

def shout(string)
  string.upcase
end

def repeat(string, repeat = 2)
  repeated = []
  repeat.times { repeated.push(string) }
  repeated.join(' ')
end

def start_of_word(string, n)
  string[0...n]
end

def first_word(string)
  # My method that I typed.. Not as pretty
  # string[0...(string.index(' '))]
  string.split(' ').first
end

def titleize(s)
  words = s.split.map do |word|
    if %w(the and over).include?(word)
      word
    else
      word.capitalize
    end
  end
  words.first.capitalize!
  words.join(" ")
end