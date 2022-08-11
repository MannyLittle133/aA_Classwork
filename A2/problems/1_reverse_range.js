/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]

reverseRange(2,10) => [9, 8 , 7,6, 5, 4, 3]

reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  
  let arr = []

  for (let i = end - 1; i > start; i -= 1) {
 
    arr.push(i)
     
  }

    
  return arr

}

console.log(reverseRange(2,7))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
