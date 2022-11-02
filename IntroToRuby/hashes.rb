# Data structure - hashes
# `key => value` pairs


# my_hash = { 
#     "name" => "App Academy", 
#     "color" => "red", 
#     "age" => 5, 
#     "isAwesome" => true,
#     42 => "hello"
# }

# my_hash["color"] = "orange"

# my_hash['age'] = 21

# my_hash['name'] = "Manny"

# puts my_hash['name']

# puts my_hash['age'] += 7

# puts my_hash[42] += " WoRLD"

# ************************************************

# Hash Methods
# .length
# .has_key?(k)
# .has_value(v)
# .keys
# .values

# dog = {
#     "name" => "Cassie",
#     "color" => "black",
#     "age" => 2,
#     "isHungry" => true,
#     "enemies" => ["husky"]
# }

# dog["location"] = "NY"

# print dog["enemies"] << "door bell"
# print dog["color"] << "brown"

# puts dog.has_key?("weight")
# p dog.has_value?("grey")
# p dog.keys[1]
# p dog.values[1]

# better_person = {
#     "name" => "Manny",
#     "age" => 28,
#     "location" => "Beverly Hills",
#     "isHungry" => true
# }

# puts better_person['location']


# pizza = {
#     "style" => "New York",
#     "slices" => 8,
#     "diameter" => "pause",
#     "toppings" => ["pepperoni", "peppers", "jalepeno"],
#     "is_tasty" => true
# }

# pizza.each do |key, value|
#     puts key
#     puts value
#     puts '------'
# end

# pizza.each_key do |key|
#     puts key
# end

# pizza.each_value do |value|
#     puts value
# end


# our_hash = {
#     "a" => 28
# }

# puts our_hash['a'] == nil

# Hash.new(default)

# sweet_hash = Hash.new("hello")

# sweet_hash['a'] = "goodbye"

# puts sweet_hash['c']

# count = Hash.new(0)

# str = "bootcamp prep"

# str.each_char do |char| 
#     puts char
#     count[char] += 1
#     puts count
# end

# puts count

# new_hash = {'a' => 42, 'b' => 10}

# key = 'b'
# puts new_hash[key]

# sort_by

# str = "mississippi river"

# count = Hash.new(0)

# str.each_char { |char| count[char] += 1 }

# print count
# puts
# print count.sort_by { |key, value| value }
# print count.sort_by { |key, value| key }
# sorted = count.sort_by { |key, value| value }

# print sorted[-1][1]

# my_array = ['a', 'b', 'c']

# p my_array[3]

# a_hash = { 'name' => 'cassie', 'age' => 2}

# p a_hash['lo']

# Access
# hash = { "name" => "App Academy", "color" => "red" }

# p hash["color"]  # prints "red"
# p hash["age"]    # prints nil

# k = "color"
# p hash[k]        # prints "red"

# hash["age"] = 5
# p hash           # prints {"name"=>"App Academy", "color"=>"red", "age"=>5}
# Checking Existence
# hash = { "name" => "App Academy", "color" => "red" }

# p hash.has_key?("name")             # prints true
# p hash.has_key?("age")              # prints false
# p hash.has_key?("red")              # prints false

# p hash.has_value?("App Academy")    # prints true
# p hash.has_value?(20)               # prints false
# p hash.has_value?("color")          # prints false
# Hash Enumerable Methods
# hash = { "name" => "App Academy", "color" => "red" }

# hash.each { |key, val| p key + ', ' + val} # prints
# # "name, App Academy"
# # "color, red"

# hash.each_key { |key| p key } # prints
# # "name"
# # "color"

# hash.each_value { |val| p val } # prints
# # "App Academy"
# # "red"
# Hash.new
#   plain_hash = { }
#   plain_hash["city"] = "SF"
#   p plain_hash["city"]    # prints "SF"
#   p plain_hash["country"] # prints nil

#   hash_with_default = Hash.new("???")
#   hash_with_default["city"] = "NYC"
#   p hash_with_default["city"]    # prints "NYC"
#   p hash_with_default["country"] # prints "???"

def get_double_age(hash)
	return hash['age'] * 2
end

puts get_double_age({"name"=>"App Academy", "age"=>5}) # => 10
puts get_double_age({"name"=>"Ruby", "age"=>23})       # => 46def get_double_age(hash)


def get_full_name(hash)
	return hash['first'] + ' ' + hash['last'] + ', the ' + hash['title']
end

hash1 = {"first"=>"Michael", "last"=>"Jordan", "title"=> "GOAT"}
puts get_full_name(hash1) # => "Michael Jordan, the GOAT"

hash2 = {"first"=>"Fido", "last"=>"McDog", "title"=> "Loyal"}
puts get_full_name(hash2) # => "Fido McDog, the Loyal"

def word_lengths(sentence)
    words = sentence.split(' ')
  count = {}

words.each { |word| count[word] = word.length }

return count
end

puts word_lengths("this is fun") #=> {"this"=>4, "is"=>2, "fun"=>3}
puts word_lengths("When in doubt, leave it out") #=> {"When"=>4, "in"=>2, "doubt,"=>6, "leave"=>5, "it"=>2, "out"=>3}

def retrieve_values(hash1, hash2, key)
    vals = []
  val1 = hash1[key]
    val2 = hash2[key]
    return vals.push(val1, val2)
end


dog1 = {"name"=>"Fido", "color"=>"brown"}
dog2 = {"name"=>"Spot", "color"=> "white"}
print retrieve_values(dog1, dog2, "name") #=> ["Fido", "Spot"]
puts
print retrieve_values(dog1, dog2, "color") #=> ["brown", "white"]
puts

def cat_builder(name_str, color_str, age_num)

    return {  'name' => name_str, 'color' => color_str, 'age' => age_num }
    
end
  
print cat_builder("Whiskers", "orange", 3) #=> {"name"=>"Whiskers", "color"=>"orange", "age"=>3}
puts
  
print cat_builder("Salem", "black", 100) #=> {"name"=>"Salem", "color"=>"black", "age"=>100}
puts


def ae_count(str)
	count = {'a' =>0, 'e' =>0}
  	
  str.each_char do |char|
    
    if char == 'e' || char =='a'
      count[char] += 1   
    end  
  end
  return count
end

puts ae_count("everyone can program") #=> {"a"=>2, "e"=>3}
puts ae_count("keyboard") #=> {"a"=>1, "e"=>1}


def element_count(arr)
	count = Hash.new(0)
  
  arr.each { |ele| count[ele] += 1 }
    
    
    return count
end

puts element_count(["a", "b", "a", "a", "b"]) #=> {"a"=>3, "b"=>2}
puts element_count(["red", "red", "blue", "green"]) #=> {"red"=>2, "blue"=>1, "green"=>1}

def select_upcase_keys(hash)
	caps = {}
  
  hash.each do |key, value|
    if key == key.upcase
      caps[key] = value
    end
  end
  return caps
end

print select_upcase_keys({"make"=> "Tesla", "MODEL"=> "S", "Year"=> 2018, "SEATS"=> 4}) # => {"MODEL"=>"S", "SEATS"=>4}
puts

print select_upcase_keys({"DATE"=>"July 4th","holiday"=> "Independence Day", "type"=>"Federal"}) # => {"DATE"=>"July 4th"}
puts


def hand_score(hand)
    # hands = hand.upcase
      game = {
        "A"=>4,
        "K"=>3,
        "Q"=>2,
        "J"=>1
      }
        
    count = 0
    hand.each_char { |cards| count += game[cards.upcase] }
    
  
    return count
end
  
puts hand_score("AQAJ") #=> 11
puts hand_score("jJka") #=> 9


def frequent_letters(string)
	count = Hash.new(0)
  	string.each_char { |char| count[char] += 1 }
  
  dubs = []
  count.each do |char, num|
    if num > 2
      dubs << char
    end
  end
  return dubs
end

print frequent_letters('mississippi') #=> ["i", "s"]
puts
print frequent_letters('bootcamp') #=> []
puts

def hash_to_pairs(hash)
    pairs = []
    hash.each { |key, val| pairs << [key, val] }
    return pairs
  end
  
  print hash_to_pairs({"name"=>"skateboard", "wheels"=>4, "weight"=>"7.5 lbs"}) #=> [["name", "skateboard"], ["wheels", 4], ["weight", "7.5 lbs"]]
  puts
  
  print hash_to_pairs({"kingdom"=>"animalia", "genus"=>"canis", "breed"=>"German Shepherd"}) #=> [["kingdom", "animalia"], ["genus", "canis"], ["breed", "German Shepherd"]]
  puts