#puts "Hello World"
#puts "GoodBye"
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

# puts result + 1


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
#     end
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


def count_e(word)
	count = 0
  i = 0
  while i < word.length
    ele = word[i]
    
    if ele == "e"
        count += 1
        
    end
    i += 1
  end
  return count
end

puts count_e("movie") # => 1
puts count_e("excellent") # => 3

def isPrime
    
end