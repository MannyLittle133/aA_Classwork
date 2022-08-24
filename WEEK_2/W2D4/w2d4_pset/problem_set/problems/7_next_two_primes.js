/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function nextTwoPrimes(num) {

    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) { 
        if (n % i === 0) {
            return false;
        }



    }

    return true;
}

function nextTwoPrimes(num) {
    let primes = []
    for (let i = num + 1; primes.length; i++) {
        if (isPrime(i)) {
            }    primes.push(i);
    }
   return primes;
}
console.log(nextTwoPrimes(2))
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
