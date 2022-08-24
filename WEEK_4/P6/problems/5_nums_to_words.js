/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

function numsToWords(numString) {
  let obj = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  }

  let newStr = '';
  for (let i = 0; i < numString.length; i++) {
    let char = numString[i]
    console.log(char)
    newStr += obj[char]
  }
  return newStr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;
