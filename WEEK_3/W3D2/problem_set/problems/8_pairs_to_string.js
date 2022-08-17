/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

// function pairsToString(arr) {

// }

// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = pairsToString;


function dynamicFizzBuzz(max, num1, num2) {
  
  for (let i = 0; i < max; i++) {
      if (i % num1 === 0 || i % num2 === 0) {
          
      console.log(i)
    }
  }
}


console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6));