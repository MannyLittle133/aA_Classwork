/***********************************************************************
Write a function removeNthLetter(word, n) that takes in a string and an
index `n`. The function should return that word with the character at
index `n` removed.

Examples:

removeNthLetter('bootcamp', 0); // => 'ootcamp'
removeNthLetter('bootcamp', 6); // => 'bootcap'
removeNthLetter('bootcamp', 4); // => 'bootamp'
removeNthLetter('computer', 3); // => 'comuter'
***********************************************************************/

// function removeNthLetter(word, n) {
//     return word.slice(0, n) + word.slice(n + 1)
// }

// console.log(removeNthLetter('bootcamp', 0))
// console.log(removeNthLetter('bootcamp', 6))
// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = removeNthLetter;


function primeFactors(n) {
    let primes = []

    for (let i = 1; i < n; i++) {
        if (n % i === 0 && findPrimes(i))
        primes.push(i)
    }
    return primes
}


function findPrimes(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}