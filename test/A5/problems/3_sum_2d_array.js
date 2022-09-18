/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/

function sum2DArray(array) {
  let sum = 0 // initialize sum to 0

  for (let i = 0; i < array.length; i++) { // loops through the array of arrays
    let arr = array[i] // initialize arr as each array

    for (let j = 0; j < arr.length; j++) { // loops through each number in the array
      let nums = arr[j] // initialize arr at j as every number in the array
      sum += nums // adds each number in the array and adds it to nums
    }
  }
  return sum // return the sum of numbers
}

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
console.log(sum2DArray(arr1)); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
console.log(sum2DArray(arr2)); // => 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sum2DArray;
