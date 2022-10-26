# puts "Hello World"
# puts "GoodBye"
# puts "one"
# puts "tomato"
# puts "two"
# puts "potato"

# puts 1 + 1 
# puts -5 + 3
# puts 2.5 + 0.5

# Division with integers will ignore the decimal part of the result. 
# If we want to get a decimal one of the numbers must be a decimal. 
# For example, 10 / 3.0 will give 3.33333
# puts 5 / 2
# puts 9 / 2.0 # in order to get full solution for division you have to make the smaller number a decimal
# puts 20 / 3.0

# Arithmetic follows the order of operations. 
# Division has a higher precedence than addition.
# 5 + 5 / 2.0 -> 5 + 2.5 -> 7.5
# puts 6 + 4 / 2
# puts (6 + 4) / 2

# Modulo (%) gives us the remainder of the division. 27 divided by 6 is 4 w/ remainder 3. So the answer is 3.
# puts 13 % 5 # 13 / 5 = 2.3
# puts 14 % 5

# puts 5 == 5
# puts 3 != 5


# def quickSort(arr) 
#     if (arr.length <= 1) return arr;
#     pivot = arr.shift()
#     left = quickSort.filter(ele => ele < pivot)
#     right = quickSort.filter(ele => ele < pivot)
#     return left.concat([pivot], right)
# end

# puts quickSort([3, 12, 8, 9, 19, 27, 4, 2])

# puts !true

# puts false && false
# puts false && true
# puts true && false
# puts true && true

# Printing
# There are a few ways to "print" output to the screen in Ruby. We have been using puts frequently in this course, but you can also use print and p. So many options! However, each method has some unique behavior. Let's step through them.

# print
# print is the simplest method used to print data. It will do minimal formatting and not even add a new line at the end of the print:

# print "hello"
# print "world"

# # the code above would print:
# # helloworld
# To manually add a new line you can use the character "\n". "\n" stands for "new line." This syntax is often used for other whitespace characters like tab ("\t").

# print "hello\n"
# print "\tworld\n"

# # the code above would print:
# # hello
# #   world
# puts
# puts also prints data to the screen, but with some formatting, including adding an automatic new line after every puts:

# puts "hello"
# puts "world"

# # the code above would print:
# # hello
# # world
# p
# p prints data to the screen with a new line but also gives information on type of data was printed:

# p "hello"
# p 'goodbye'
# p "42"
# p 42

# # the code above would print:
# # "hello"
# # "goodbye"
# # "42"
# # 42
# Lets notice a few things above:

# it doesn't matter if we wrap a string in double quotes or single quotes, it is still a string (in a later course we'll learn a slight distinction between the two).
# we are able to differentiate the string "42" from the number 42 because the p method will actually print out the quotes that wrap the string data. Very cool!


# To manually add a new line you can use the character "\n". 
# "\n" stands for "new line." 
# This syntax is often used for other whitespace characters like tab ("\t").
# print "hello\n"
# print "\tworld\n"

# print "Wassup\n"
# print "\tSheka\n"

# p prints data to the screen with a new line 
# but also gives information on type of data was printed:

# p "hello"
# p 'goodbye'
# p "42"
# p 42

# the code above would print:
# "hello"
# "goodbye"
# "42"
# 42
# p "hello"
# p "goodbye"
# p "42"
# p 42

# puts "hello".length
# puts "Hello"[0]

# puts "hello " + "world"

# variables

# location = "NY"
# puts location

# my_num = 28
# puts my_num + 2 

# num = 12
# is_even = num % 2 == 0
# puts is_even


# defining a method

# def sayMessage
#     puts "hey programmers"
#     puts "what's for lunch"

# end

# # call a method

# puts "before method call"
# sayMessage
# puts "after method call" 

# def say_hello(person1, person2)
#     puts "hello " + person1 + ' and ' + person2 + "."

# end

# say_hello("Sheka", "Manny")


# def calc_average(num1, num2)
#     sum = num1 + num2
#     avg = sum / 2.0
#     return avg
# end

# result = calc_average(5, 10)

# puts result 


# num = 0

# if num > 0
#     puts "positive"
# elsif num < 0
#     puts "negative"
# else
#     puts "num is zero"
# end

# num = 9

# if num > 0
#     puts "Positive"
# end

# if num % 2 == 0
#     puts "Even"
# end
# # 1
# def is_div_by_5(number)
# 	if (number % 5 == 0)
#       return true
#     else
#       return false
#     end
# end
# # 2
# def is_div_by_5(number)
#     return number % 5 == 0
# end
# puts is_div_by_5(10) # => true
# puts is_div_by_5(40) # => true
# puts is_div_by_5(42) # => false
# puts is_div_by_5(8)  # => false

# def either_only(number)
#     if (number % 3 == 0 || number % 5 == 0) && !(number % 3 == 0 && number % 5 == 0)
#       return true
#     else
#       return false
#     end
# end


# def either_only(number)
# 	return number % 3 == 0 && number % 5 != 0 || number % 5 == 0 && number % 3 != 0
# end

# puts either_only(9)  # => true
# puts either_only(20) # => true
# puts either_only(7)  # => false
# puts either_only(15) # => false
# puts either_only(30) # => false

# def larger_number(num1, num2)
# 	if (num1 > num2)
#       return num1
#     else
#       return num2
#     end
# end

# puts larger_number(42, 28)   # => 42
# puts larger_number(99, 100)  # => 100

# def longer_string(str1, str2)
# 	if (str1.length >= str2.length)
#       return str1
#     else
#       return str2
#     end
# end

# puts longer_string("app", "academy") # => "academy"
# puts longer_string("summer", "fall") # => "summer"
# puts longer_string("hello", "world") # => "hello"

# array = [1, 2, 3, 4, 5]

# def loop(array) 
#     i = 0
#     while i < array.length
#         p array[i]
#         i += 1
#       end
# end
# p loop(array)

# def word_check(word)
# 	if word.length > 6
#       return "long"
#     elsif word.length < 6
#       return "short"
#     elsif word.length == 6
#       return "medium"
#     end
  
# end

# puts word_check("contraption") # => "long"
# puts word_check("fruit")       # => "short"
# puts word_check("puzzle")      # => "medium"


# def count_e(word)
# 	count = 0
#   i = 0
#   while i < word.length
#     ele = word[i]
    
#     if ele == "e"
#         count += 1
        
#     end
#     i += 1
#   end
#   return count
# end

# puts count_e("movie") # => 1
# puts count_e("excellent") # => 3

# def isPrime(num)
#   if num < 2
#     return false
#   end

#   i = 2
#   while i < num
#     if num % i == 0
#       return false
#     else
#       return true
#     end
#     i += 1
#   end
# end

# puts isPrime(2)

# def repeatHello()

#   puts "before the loop"
#   counter = 1

#   while counter <= 5
#     puts counter

#     counter += 1
#   end
#   puts "after the loop"
# end

# repeatHello()

# def printNums(min, max, step)
#   i = min
#   while i <= max
#     p i

#     i += step
#   end
# end

# printNums(0, 15, 3)
# puts '------'
# printNums(10, 15)

# def stringLoop(str)

#   i = 0
#   while i < str.length
#     ele = str[i]
#     puts str[i]
#     i += 1
#   end
# end

# puts stringLoop("hello")

# i = 1
# while i <= 10
#   puts i 
#   if i == 5
#     # break #immediatelty exits the loop
#     i += 1
#     next # skips to the next itteration
#   end
#   puts i
#   i += 1
# end

# def count_e(word)
# 	count = 0
#   i = 0
#   while i < word.length
#     ele = word[i]
    
#     if ele == "e"
#       count += 1
      
#     end
#     i += 1
#   end
#   return count
# end

# puts count_e("movie") # => 1
# puts count_e("excellent") # => 3

# def count_a(word)
# 	count = 0
#   i = 0
#   while i < word.length
#     ele = word[i]
    
#    if ele == 'a' || ele == 'A'
#      count += 1
#    end
#     i += 1
#   end
#   return count
# end

# puts count_a("application")  # => 2
# puts count_a("bike")         # => 0
# puts count_a("Arthur")       # => 1
# puts count_a("Aardvark")     # => 3

# def count_vowels(word)
# 	# vowels = 'aeiou'
#   	count = 0
#   i = 0
#   while i < word.length
#     ele = word[i]
    
#     if ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u'
#       count += 1
#     end
#     i += 1
#   end
#   return count
# end

# puts count_vowels("bootcamp")  # => 3
# puts count_vowels("apple")     # => 2
# puts count_vowels("pizza")     # => 2

# def sum_nums(max)
# 	sum = 0
#   i = 1
#   while i <= max
#     sum += i
#     i += 1
#   end
#   return sum
# end

# puts sum_nums(4) # => 10, because 1 + 2 + 3 + 4 = 10
# puts sum_nums(5) # => 15

# def factorial(num)
#   product = 1
  
#   i = 1
#   while i <= num
#     product *= i
    
#     i += 1
#   end
# 	return product
# end

# puts factorial(3) # => 6, because 1 * 2 * 3 = 6
# puts factorial(5) # => 120, because 1 * 2 * 3 * 4 * 5 = 120

# def reverse(word)
# 	str = ""
#   i = 0
#   while i < word.length
#  	char = word[i]
#     str = char + str
#   	i += 1
#   end
#   return str
# end

# puts reverse("cat")          # => "tac"
# puts reverse("programming")  # => "gnimmargorp"
# puts reverse("bootcamp")     # => "pmactoob"

# def is_palindrome(word)
# 	reversed = ''
#   i = 0
#   while i < word.length
#   	char = word[i]
#    	reversed = char + reversed 
#     i += 1 
#   end
# 	return reversed == word
# end

# puts is_palindrome("racecar")  # => true
# puts is_palindrome("kayak")    # => true
# puts is_palindrome("bootcamp") # => false


# letters = ['a', 'b', 'c']

# puts letters[0]

# names = ['manny', 'sheka', 'cassie', 'nay nay', 'ronnice', 'chris']
# food = ['pizza', 'salad', 'burgers', 'rice']
# p names

# names << 'aaliyah'

# p names

# names << "ronnice"

# p names

# names[1] = 'nay nay'

# p names

# i = 0

# while i < names.length
#   puts names[i]
  
#   i += 1
# end

# def print_array(arr)
#   i = 0

#   while i < arr.length
#     puts arr[i]
  
#     i += 1
#   end
# end

# print_array(names)
# print_array(food)

# def doubler(numbers)
# 	dubs = []
  
#   i = 0
#   while i < numbers.length
#     nums = numbers[i]
#     dubs << nums * 2
#     i += 1
#   end
#   return dubs
# end

# print doubler([1, 2, 3, 4]) # => [2, 4, 6, 8]
# puts
# print doubler([7, 1, 8])    # => [14, 2, 16]

# def yell(words)
# 	yellWords = []
  
#   i = 0
#   while i < words.length
#     word = words[i]
#     yellWords << word + '!'
    
#     i += 1
#   end
#   return yellWords
# end

# print yell(["hello", "world"]) # => ["hello!", "world!"]
# puts
# print yell(["code", "is", "cool"]) # => ["code!", "is!", "cool!"]

# def element_times_index(numbers)
# 	indexArr = []
#   i = 0
#   while i < numbers.length
#     num = numbers[i]
#     indexArr << num * i
#     i += 1
#   end
#   return indexArr
# end

# print element_times_index([4, 7, 6, 5])       # => [0, 7, 12, 15]
# puts
# print element_times_index([1, 1, 1, 1, 1, 1]) # => [0, 1, 2, 3, 4, 5]

# def even_nums(max)
#   evenArr = []
  
#   i = 0
#   while i <= max
    
#     if i % 2 == 0
#       evenArr << i
#     end
#     i += 1
#   end
# 	return evenArr
# end

# print even_nums(10) # => [0, 2, 4, 6, 8, 10]
# puts
# print even_nums(5)  # => [0, 2, 4]

# def range(min, max)
# 	rangeArr = []
  
#   i = min
#   while i <= max
#     rangeArr << i
#     i += 1
#   end
#   return rangeArr
# end

# print range(2, 7)   # => [2, 3, 4, 5, 6, 7]
# puts
# print range(13, 20) # => [13, 14, 15, 16, 17, 18, 19, 20]

# def odd_range(min, max)
# 	oddNums = []
  
#   i = min
#   while i <= max 
#     if i % 2 != 0
#       oddNums << i
#     end
#     i += 1
#   end
#   return oddNums
# end

# print odd_range(11, 18) # => [11, 13, 15, 17]
# puts
# print odd_range(3, 7)   # => [3, 5, 7]

# def reverse_range(min, max)
# 	revArr = []
  
#   i = max
#   while i > min
#     revArr << i
#     i -= 1
#   end
#   return revArr
# end

# print reverse_range(10, 17) # => [16, 15, 14, 13, 12, 11]
# puts
# print reverse_range(1, 7)   # => [6, 5, 4, 3, 2]

# def first_half(array)
# 	halfArr = []
  
#   i = 0
#   while i < array.length / 2.0
#     ele = array[i]
#     halfArr << ele
    
#     i += 1
#   end
#   return halfArr
# end

# print first_half(["Brian", "Abby", "David", "Ommi"]) # => ["Brian", "Abby"]
# puts
# print first_half(["a", "b", "c", "d", "e"])          # => ["a", "b", "c"]

# def factors_of(num)
# 	factorArr = []
  
#   i = 1
#   while i <= num
    
#     if num % i == 0
#       factorArr << i
#     end
#     i += 1
#   end
#   return factorArr
# end

# print factors_of(3)   # => [1, 3]
# puts
# print factors_of(4)   # => [1, 2, 4]
# puts
# print factors_of(8)   # => [1, 2, 4, 8]
# puts
# print factors_of(9)   # => [1, 3, 9]
# puts
# print factors_of(16)  # => [1, 2, 4, 8, 16]

# def select_odds(numbers)
# 	oddArr = []
  
#   i = 0
#   while i < numbers.length
#     nums = numbers[i]
#     if nums % 2 == 1
#       oddArr << nums
#     end
    
#     i += 1
#   end
#   return oddArr
# end

# print select_odds([13, 4, 3, 7, 6, 11]) # => [13, 3, 7, 11]
# puts
# print select_odds([2, 4, 6])            # => []

# def select_long_words(words)
# 	wordArr = []
  
#   i = 0
#   while i < words.length
#     word = words[i]
    
#     if word.length > 4
#       wordArr << word
#     end
#     i += 1
#   end
#   return wordArr
# end

# print select_long_words(["what", "are", "we", "eating", "for", "dinner"]) # => ["eating", "dinner"]
# puts
# print select_long_words(["keep", "coding"])                               # => ["coding"]

# def sum_elements(arr1, arr2)
# 	sumArr = []
# 	i = 0
#   while i < arr1.length
#     newEle = arr1[i] + arr2[i]
#     sumArr << newEle
   
#   i += 1 
#   end
#   return sumArr
# end

# print sum_elements([7, 4, 4], [3, 2, 11])                            # => [10, 6, 15]
# puts
# print sum_elements(["cat", "pizza", "boot"], ["dog", "pie", "camp"]) # => ["catdog", "pizzapie", "bootcamp"]