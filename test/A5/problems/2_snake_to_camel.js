/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/

function snakeToCamel(str) {
  let string = str.split('_') // initialize string to str with the words split
  let newStr = '' // initialize new string to have the new string added to it

  for (let i = 0; i < string.length; i++) { // loop through the string 
    let char = string[i] // char becomes each letter in the split string 
    let upper = char[0].toUpperCase() // upper becomes the character at the 0th index and is made upper case
    let lower = char.slice(1).toLowerCase() // lower becomes the character sliced from the 1st of the index to the last and becomes lower case
    newStr += upper + lower // new string becomes the upper variable and lower variable

  }

  return newStr // return the new string
}
console.log(snakeToCamel('snakes_go_hiss')); // => 'SnakesGoHiss'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
