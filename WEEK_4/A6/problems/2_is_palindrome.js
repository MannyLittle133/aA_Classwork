/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  let senArr = sentence.split(' ')
  let newStr = senArr.join('')

  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i]

    if (char !== newStr[newStr.length -1 -i]) {
      return false
    }
 
  }
  return true
}
console.log(isPalindrome('rats live on no evil star')); // => true
// console.log(isPalindrome('hello world')); // => false
// console.log(isPalindrome('hello world')); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
