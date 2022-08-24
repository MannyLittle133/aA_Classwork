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
  let revNums = [] 

  for (let i = end -1; i > start; i--) {
    revNums.push(i)
  }

  return revNums
}
  
  
console.log(reverseRange(2,10))
console.log(reverseRange(4,2))
console.log(reverseRange(2,7))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
