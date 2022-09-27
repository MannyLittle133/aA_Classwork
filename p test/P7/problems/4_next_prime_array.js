/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

function nextPrimeArray(array) {
  let numArr = []

  for (let i = 0; i < array.length; i++) {

    if(isPrime(array[i])) {
      numArr.push(findNextPrime(array[i]))
    } else {
      numArr.push(array[i])
    }
  }
  return numArr
}

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function findNextPrime(num) {
  for (let i = num+1; true; i++) { // the number after the current number
    if(isPrime(i)) { // loop continues until it finds the next prime number
      return i
    }
  }
}

console.log(nextPrimeArray([-4, 2, 5, 4, 11]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
