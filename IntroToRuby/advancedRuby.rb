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

# def to_initials(name)
# 	names = name.split(' ')
#   	initials = ''
#   	names.each { |firstLast| initials += firstLast[0]}
#   	return initials
# end

# puts to_initials("Kelvin Bridges")      # => "KB"
# puts to_initials("Michaela Yamamoto")   # => "MY"
# puts to_initials("Mary La Grange")      # => "MLG"

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
	lower = str.downcase
  	new_name = ''
  
  lower.each do |new_name += parts[0].upcase|
    
  
  
end

puts format_name("chase WILSON") # => "Chase Wilson"
puts format_name("brian CrAwFoRd scoTT") # => "Brian Crawford Scott"

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