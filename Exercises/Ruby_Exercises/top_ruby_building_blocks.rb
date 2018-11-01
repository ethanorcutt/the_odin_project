def caesar_cipher(string, shift)
  shifted_string = []

  string.split('').each do |c|
    if((c.ord >= 65 && c.ord <= 90) || (c.ord >= 97 && c.ord <= 122))
      if( ((c.ord + shift) > 90 && (c.ord + shift) < 97) || ((c.ord + shift) > 122))
        shifted_string.push(((c.ord + shift) - 26).chr)
      else
        shifted_string.push((c.ord + shift).chr)
      end
    else
      shifted_string.push(c)
    end
  end
  shifted_string.join('')
end

def stock_picker(price_list)
  buy_index = price_list.index(price_list.min)

  temp = price_list.clone
  temp.slice!(0..buy_index)

  sell_index = price_list.index(temp.max)
  
  [buy_index, sell_index]
end

def substrings(string, dictionary)
  # Downcase the string to eliminate missing words.
  string.downcase!
  # Convert the dictionary into a hash map. Set the count to 0 for each word.
  results = dictionary.collect { |item| [item, 0] }.to_h
  # For each word in the dictioanry, find that word in the hash map
  # and set its count to the # of times that word occurs in the string.
  # The scan method returns an array displaying the # of times the word occured.
  dictionary.each { |x| results[x] = string.scan(x).length }
  # For any key that has a value of 0, delete it from the hash map.
  results.each { |key, value| results.delete(key) if value == 0 }
end

puts "Caesar Cipher:"
puts "\t" + caesar_cipher("What a string!", 5)

puts "\nStock Picker:"
puts "\t" + stock_picker([2,17,3,6,9,15,8,6,1,10,22]).to_s

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

puts "\nSubstrings:"
puts "\t" + substrings("below", dictionary).to_s
puts "\t" + substrings("Howdy partner, sit down! How's it going?", dictionary).to_s