/*******************************************************************************
Write a function reverse2D(array) that takes in a 2D array of strings. The function
should return a string representing the elements of the array in reverse order.

Examples:

var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) => 'ihgfedcba'


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) => 'PatrickOscarMikeMattJulian'

*******************************************************************************/

function reverse2D(array) {

  let rev = ('') 

  for (let i = array.length - 1; i >= 0; i--) {
    let arr = array[i]
    
    for (let j = arr.length - 1; j >= 0; j--) {
      let ele = arr[j]
      rev += ele
    }

  }
  return rev
}


var arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

console.log(reverse2D(arr1))


var arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
console.log(reverse2D(arr2))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverse2D;
