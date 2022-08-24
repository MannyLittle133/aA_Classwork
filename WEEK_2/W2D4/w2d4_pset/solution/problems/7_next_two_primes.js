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

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


// function nextTwoPrimes(num) {
//   var primes = [];

//   for (var i = num + 1; primes.length < 2; i += 1) {
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }

//   return primes;
// }


function nextTwoPrimes(num) {
  let arrOfPrimes = [];

  // I need to loop through numbers starting from num + 1 and if it's prime I will add it to my array.
  // When I have two primes in the array, I'll stop and return it.

  for ( let i = num + 1; arrOfPrimes.length < 2; i++) {
    if (isPrime(i)) {
      arrOfPrimes.push(i)
    }

  }

  return arrOfPrimes;
}

console.log(nextTwoPrimes(4))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
