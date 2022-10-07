/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  
  for(let i = 1; true; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i
    }
  }

}

console.log(leastCommonMultiple(2, 3))
console.log(leastCommonMultiple(6, 10)) 
console.log(leastCommonMultiple(24, 26)) 
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;