/*******************************************************************************
Write a function hasSymmetry(array) that takes in an array. The function should
return true if the array has symmetry, false otherwise. For an array to have symmetry,
it should be the same forwards and backwards.

TIP:
In JavaScript, it is not possible to compare arrays for equality with `===`.
In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) => true
hasSymmetry([1, 2, 3, 3, 4, 1]) => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) => false
*******************************************************************************/
// loop thru array
// i = 0, 1, 2, 3, 4, 5, 6
// j = array.length - 1 - i
// the compare array[i] to array[j] if not equal then return false
function hasSymmetry(array) {
  for (let i = 0; i <= array.length; i++) {
    let start = array[i]
    let end = array[array.length - 1 - i]

    if (start !== end) {
      return false
    }

  }
  return true ;
}
console.log(hasSymmetry([1, 2, 3, 3, 2, 1]))
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]))
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']))
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hasSymmetry;
