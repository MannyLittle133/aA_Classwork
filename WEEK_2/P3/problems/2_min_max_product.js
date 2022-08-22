/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array){
  let max = array[0]
  let min = array[0]

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i]
   if (max < currentNum) {
        max = currentNum
   } 
   if (currentNum < min) {
    min = currentNum
   }
  }
  return min * max
}
console.log(minMaxProduct([6, 3, 7, 2]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
