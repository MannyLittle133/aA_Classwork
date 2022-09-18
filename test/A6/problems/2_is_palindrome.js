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
    let newSen = sentence.split(' ') // splits the array at the spaces to into arrays with each word in its own array
    let joined = newSen.join('') // joins the words in each array into 1 long sentence with no spaces
    // console.log(joined)
    // console.log(newSen)

    for (let idx = 0; idx < joined.length; idx++) { // loops through the joined sentence
        let front = joined[idx] // initializes front as the forward version of the sentence
        let back = joined[joined.length - 1 - idx] // initializes back as the backwards version of the sentence
        // console.log(front)
        if (front !== back) { // if the forwards version is not equal to the backwards version return false
            return false
        }
    }
  return true
}
console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
console.log(isPalindrome('racecar')); // => true
console.log(isPalindrome('hello world')); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
