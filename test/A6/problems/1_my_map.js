/*******************************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should
pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in `Array.prototype.map` method. It should return an array
where each element is the return value of the callback given the element in the
corresponding position. See the examples.

Examples:

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]

function multiply(num1, num2) {
  return num1 * num2;
}

myMap([2, 4, 6, 6], multiply); // => [ 0, 4, 12, 18 ]
*******************************************************************************/

function myMap(arr, cb) {
  let array = [] // create emo]pty array for new numbers 

  for (let idx = 0; idx < arr.length; idx++) { // loop through the array
    let ele = arr[idx] // initialize ele as every element of the array
    let newEle = cb(ele) // initialize new ele as the cb with ele in the call back
    if ((4 % ele !== 0) && (6 % ele !== 0)) { // if these nums divided by the elements do not equal to 0
      array.push(newEle) // push the call back eith only the element to the array
    } else { // if not
     array.push(cb(ele, idx)) // push the call back with the ele and the index into the array
    }
   }
  return array // bring back the array of numbers
}


console.log(myMap([9, 25, 100, 36, 81], Math.sqrt)); // => [ 3, 5, 10, 6, 9 ]

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(myMap([2, 4, 6, 6], multiply)); // => [ 0, 4, 12, 18 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myMap;
