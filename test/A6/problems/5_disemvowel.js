/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  let vowels = 'aeiouAEIOU'
  let newStr = ''

  for (let i = 0; i < string.length; i++) {
    let word = string[i]
    if (!vowels.includes(word))
    newStr += word
  }
  return newStr
}
console.log(disemvowel('bootcamp')); // => 'btcmp'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
