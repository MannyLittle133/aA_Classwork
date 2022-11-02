# arr.pop() removes last element from an array
# arr.push() adds an element(s) to the end of an array

# arr.unshift() adds an element to the front of an array
# arr.shift() removes the first element of an array 

# arr = ["manny", "sheka", "cassie"]
# puts
# print arr.pop()
# puts
# print arr.unshift("aaliyah")
# puts
# print arr.shift
# puts
# print arr

# array/string.index(ele) - evaluates to the index where ele is found
# array/string.include?(ele) - evaluates to a boolean indicating if ele is found

# arr = ["manny", "sheka", "cassie"]
# puts arr.index('aaliyah')
# puts arr.include?('aaliyah')
# str = "Hello"
# puts str.index("ello")
# puts str.include?('e')

# array/string.reverse, evaluates to a new reverse version of the array or string
# array/string.reverse!, reverses an array/string in place

# arr = [1, 2, 3, 4]

# p arr.reverse # reverses the array just in that instance
# p arr.reverse! # permanantly reverses the elements in the variable

# str = 'hello'

# p str.reverse

# def is_palindrome(word)
#     return word == word.reverse
# end

# p is_palindrome("madam")
# p is_palindrome('hello')

# array[startIdx...endIdx] - grabs elements from startIdx to endIdx(inclusive)
# array[start...endIdx] - grab elements from startIdx to endIdx(excluding the element at endIdx)

# arr = ['a', 'b', 'c', 'd', 'e']

# p arr[1..3]
# p arr[1...3]

# str = 'bootcamp'

# p str[1..3]
# p str[1...3]
# p str[3..-2]
# p str[-8]
# p str[0]

# string.split evaluates to an array
# array.join evaluates to a string

# str = "follow the yellow brick road"

# p str.split("")

# p str.split("l").join("Z")


# arr = ["follow", "the", "yellow", "brick", "road"]
# p arr.join(" blah ")

# # add element(s) to the end using push
# people = ["Tommy", "Bex"]
# p people.push("Maurice", "Abby")      # prints ["Tommy", "Bex", "Maurice", "Abby"]
# p people                              # prints ["Tommy", "Bex", "Maurice", "Abby"]

# # remove the last element using pop
# people = ["Tommy", "Bex"]
# p people.pop()                        # prints "Bex"
# p people                              # prints ["Tommy"]

# # add elements(s) to the front using unshift
# people = ["Tommy", "Bex"]
# p people.unshift("Oscar", "Matthias") # prints ["Oscar", "Matthias", "Tommy", "Bex"]
# p people                              # prints ["Oscar", "Matthias", "Tommy", "Bex"]

# # remove the first element using shift
# people = ["Tommy", "Bex"]
# p people.shift()                      # prints "Tommy"
# p people                              # prints ["Bex"]
# Checking Existence
# # check if an element exists in an array using include?
# people = ["Tommy", "Bex", "Abby", "Maurice"]
# p people.include?("Abby")   # prints true
# p people.include?("Mashu")  # prints false

# # find the index of an element in an array using index
# people = ["Tommy", "Bex", "Abby", "Maurice"]
# p people.index("Abby")      # prints 2
# p people.index("Maurice")   # prints 3
# p people.index("Oscar")     # prints nil
# p people.index("Danny")     # prints nil
# # String <> Array
# # convert a string into an array using split
# sentence = "Hey Programmers! What's up."
# p sentence.split(" ")      # prints ["Hey", "Programmers!", "What's", "up."]
# p sentence.split("a")      # prints ["Hey Progr", "mmers! Wh", "t's up."]
# p sentence.split("gram")   # prints ["Hey Pro", "mers! What's up."]
# p sentence                 # prints "Hey Programmers! What's up."

# # convert an array into a string using join
# words = ["Rubies", "are", "red"]
# p words.join(" ")          # prints "Rubies are red"
# p words.join("-")          # prints "Rubies-are-red"
# p words.join("HI")         # prints "RubiesHIareHIred"
# p words                    # prints ["Rubies", "are", "red"]

# months = ["Jan", "Feb", "Mar", "Apr"]

# months.each { |month| puts month}
# months.each_with_index do |month, idx|
#     puts month
#     puts idx
#     puts "-----"
# end

# sentence = "hello world"

# sentence.each_char do |char|
#     puts char
# end

# sentence.each_char.with_index do |char, idx|
#     p char
#     p idx
#     puts "----"
# end

# arr = [1,2,3,4,5]

# (1..10).each { |num| puts num}

# def fizzBuzz(max)
#     arr = []

#     (1...max).each do |num|
#         if num % 3 == 0 && num % 5 != 0
#             arr << num
#         end
#         if num % 3 != 0 && num % 5 == 0
#             arr << num
#         end
#         # puts num
#     end
#     return arr
# end

# p fizzBuzz(20)


# (0...4).each { |num| puts num }

# 4.times { puts 'hi' }


# Enumerable Methods
# people = ["Candace", "Jon", "Jose"]

# # iterate over elements of an array using each
# people.each { |person| puts person } # prints
# # Candace
# # Jon
# # Jose

# # iterate over elements of an array with index using each_with_index
# people.each_with_index do |person, i|
#   puts person
#   puts i
#   puts "-----"
# end # prints
# # Candace
# # 0
# # -----
# # Jon
# # 1
# # -----
# # Jose
# # 2
# # -----
# String Enumerable methods
# greeting = "hello"

# # iterate over characters of a string using each_char
# greeting.each_char { |char| puts char } # prints
# # h
# # e
# # l
# # l
# # o

# # iterate over characters of a string with index using each_char.with_index
# greeting.each_char.with_index do |char, i|
#   puts char
#   puts i
#   puts "---"
# end # prints
# # h
# # 0
# # ---
# # e
# # 1
# # ---
# # l
# # 2
# # ---
# # l
# # 3
# # ---
# # o
# # 4
# # ---
# Other
# # repeat a block using times
# 3.times do
#   puts "hi"
# end # prints
# # hi
# # hi
# # hi

# # specify a range of numbers using (start..end) or (start...end)

# # including end
# (2..6).each {|n| puts n} # prints
# # 2
# # 3
# # 4
# # 5
# # 6

# # excluding end
# (2...6).each {|n| puts n} # prints
# # 2
# # 3
# # 4
# # 5

def to_initials(name)
	names = name.split(' ')
  	initials = ''
  	names.each do |first_last|
        initials += first_last[0]
  	end
  	return initials
end

puts to_initials("Kelvin Bridges")      # => "KB"
puts to_initials("Michaela Yamamoto")   # => "MY"
puts to_initials("Mary La Grange")      # => "MLG"
puts to_initials("Aaliyah Naomi Little") 

# def first_in_array(arr, el1, el2)
# 	if arr.index(el1) < arr.index(el2)
#       return el1
#     else
#       return el2
#     end

#     # p arr.index(el2)
# end

# puts first_in_array(["a", "b", "c", "d"], "d", "b"); # => "b"
# puts first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse"); # => "dog"

# def abbreviate_sentence(sent)
# 	words = sent.split(' ')
#   	voweless = []
  
#   words.each do |word|
#     newWord = abbreviate_word(word)
#     if word.length > 4
#       voweless << newWord
#     else 
#       voweless << word
#     end
#   end
#   return voweless.join(' ')
# end

# def abbreviate_word(word)
# 	vowels = 'aeiou'
#   new_word = ''
  
#   word.each_char do |char|
#     if !vowels.include?(char)
#       new_word += char
#     end
#   end
#   return new_word
# end
# puts abbreviate_sentence("follow the yellow brick road") # => "fllw the yllw brck road"
# puts abbreviate_sentence("what a wonderful life")        # => "what a wndrfl life"

# puts !'aeiou'.include?('x')


# def abbreviate_sentence(sent)
#     words = sent.split(' ')
#     new_sentence = []

#     words.each do |word|
#         voweless = abbreviate_word(word)
#         if word.length > 4
#             new_sentence << voweless
#         else
#             new_sentence << word
#         end
#     end
#     return new_sentence.join(' ')
# end

# def abbreviate_word(word)
#     vowels = 'aeiou'
#     new_word = ''

#     word.each_char do |char|
#         if !vowels.include?(char)
#             new_word += char
#         end
#     end
#     return new_word
# end

# puts abbreviate_sentence("follow the yellow brick road") # => "fllw the yllw brck road"
# puts abbreviate_sentence("what a wonderful life")        # => "what a wndrfl life"

# def abbreviate_sentence(sent)
#     words = sent.split(' ')
#     new_sentence = []

#     words.each do |word|
#         voweless = abbreviate_word(word)
#         if word.length > 4
#             new_sentence << voweless
#         else
#             new_sentence << word
#         end
#     end
#     return new_sentence.join(' ')
# end

# def abbreviate_word(word)
#     vowels = 'aeiou'
#     new_word = ''

#     word.each_char do |char|
#         if !vowels.include?(char)
#             new_word += char
#         end
#     end
#     return new_word
# end

# puts abbreviate_sentence("follow the yellow brick road") # => "fllw the yllw brck road"
# puts abbreviate_sentence("what a wonderful life")        # => "what a wndrfl life"

# def abbreviate_sentence(sent)
#     words = sent.split(' ')
#     new_sentence = []

#     words.each do |word|
#         voweless = abbreviate_word(word)
#         if word.length > 4
#             new_sentence << voweless
#         else
#             new_sentence << word
#         end
#     end
#     return new_sentence.join(' ')
# end

# def abbreviate_word(word)
#     vowels = 'aeiou'
#     new_word = ''

#     word.each_char do |char|
#         if !vowels.include?(char)
#             new_word += char
#         end
#     end
#     return new_word
# end



# puts abbreviate_sentence("follow the yellow brick road") # => "fllw the yllw brck road"
# puts abbreviate_sentence("what a wonderful life")        # => "what a wndrfl life"


# Hint: use str.upcase and str.downcase
# "abc".upcase # => "ABC"

def format_name(str)
	parts = str.split(' ')
  	new_name = []
  
  parts.each do |part|
    
    new_name << part[0].upcase + part[1..-1].downcase
  end
 	return new_name.join(' ')
end

puts format_name("chase WILSON") # => "Chase Wilson"
puts format_name("brian CrAwFoRd scoTT") # => "Brian Crawford Scott" 

# A name is valid is if satisfies all of the following:
# - contains at least a first name and last name, separated by spaces
# - each part of the name should be capitalized
#
# Hint: use str.upcase or str.downcase
# "a".upcase # => "A"

def is_valid_name(str)
	parts = str.split(' ')
  
  if parts.length >= 2
    first_name = parts[0]
    last_name = parts[1]
  	
    if first_name == first_name.capitalize && last_name == last_name.capitalize
    return true
    end
  end
   return false 
end

puts is_valid_name("Kush Patel")       # => true
puts is_valid_name("Daniel")           # => false
puts is_valid_name("Robert Downey Jr") # => true
puts is_valid_name("ROBERT DOWNEY JR") # => false

# A name is valid is if satisfies all of the following:
# - contains at least a first name and last name, separated by spaces
# - each part of the name should be capitalized
#
# Hint: use str.upcase or str.downcase
# "a".upcase # => "A"

def is_valid_name(str)
	parts = str.split(' ')
  	if parts.length < 2
      return false
    end
  parts.each do |name|
    if !is_capitalized(name)
      return false
    else
      return true
    end
  end
end

def is_capitalized(word)
  if word[0] == word[0].upcase && word[1..-1] == word[1..-1].downcase
    return true
  else
    return false
  end
end

puts is_valid_name("Kush Patel")       # => true
puts is_valid_name("Daniel")           # => false
puts is_valid_name("Robert Downey Jr") # => true
puts is_valid_name("ROBERT DOWNEY JR") # => false

# For simplicity, we'll consider an email valid when it satisfies all of the following:
# - contains exactly one @ symbol
# - contains only lowercase alphabetic letters before the @
# - contains exactly one . after the @

def is_valid_email(str)
	parts = str.split('@')
  	
  if parts.length != 2
    return false
  end
  
  first = parts[0]
  second = parts[1]
  alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  first.each_char do |char|
    if !alpha.include?(char)
      return false
    end
  end

  if second.split('.').length == 2
    return true 
  else
    return false
  end
end

puts is_valid_email("abc@xy.z")         # => true
puts is_valid_email("jdoe@gmail.com")   # => true
puts is_valid_email("jdoe@g@mail.com")  # => false
puts is_valid_email("jdoe42@gmail.com") # => false
puts is_valid_email("jdoegmail.com")    # => false
puts is_valid_email("az@email")         # => false

def reverse_words(sent)
	words = sent.split(' ')
  	rev_words = []
  
  words.each do |word|
    rev_words << word.reverse
  end
    return rev_words.join(' ')
  
end

puts reverse_words('keep coding') # => 'peek gnidoc'
puts reverse_words('simplicity is prerequisite for reliability') # => 'yticilpmis si etisiuqererp rof ytilibailer'

def rotate_array(arr, num)
    num.times do
      ele = arr.pop
      arr.unshift(ele)
    end
  
    return arr
  end
  
  print rotate_array([ "Matt", "Danny", "Mashu", "Matthias" ], 1) # => [ "Matthias", "Matt", "Danny", "Mashu" ]
  puts
  
  print rotate_array([ "a", "b", "c", "d" ], 2) # => [ "c", "d", "a", "b" ]
  puts