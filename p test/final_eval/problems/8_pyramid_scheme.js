/**************************************************************************************
Write a function `pyramidScheme(base)` that takes in an array of numbers representing
the base of a pyramid. The function should return a two-dimensional array representing
the completed pyramid. To generate an element of the next level of the pyramid,
we sum the elements below and to the left and below and to the right.

For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:

          85
        37  48
      15  22  26
   5   10   12   14
 2   3    7    5    9

Example:

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
p1 // =>
 [
   [ 85 ],
   [ 37, 48 ],
   [ 15, 22, 26 ],
   [ 5, 10, 12, 14 ],
   [ 2, 3, 7, 5, 9 ]
 ]
 

var p2 = pyramidScheme([2, 2, 2, 2]);
p2 // =>
 [
   [ 16 ],
   [ 8, 8 ],
   [ 4, 4, 4 ],
   [ 2, 2, 2, 2 ]
 ]


Hint:
  array.unshift is a method we can use to add an element to the front of an array:
    var arr = ['b', 'c'];
    arr.unshift('a');
    arr; // => [ 'a', 'b', 'c' ]

Difficulty: Hard
*************************************************************************************/

function pyramidScheme(base) {
  let numArr = [base]

  while (numArr[0] > 1) {
    let nextLayer = arraySums(numArr[0])
    numArr.unshift(nextLayer)
  }
  return numArr
}


function arraySums(arr) {
  let sumArr = []

  for (let i = 0; i < arr.length-1; i++) {
    sumArr.push(arr[i] + arr[i+1])
  }
  return sumArr
}

console.log(pyramidScheme([ 2, 3, 7, 5, 9 ]))
console.log(pyramidScheme([2, 2, 2, 2]))
/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = pyramidScheme;


// let numArr = [base] //create an array with the base included

//   while (numArr[0].length > 1) { // if the array at the 0th index has a length greater than 1
//     let nextLayer = arraySums(numArr[0]) // variable named next layer uses the function array sums to get the sum of the array at the 0th index
//     numArr.unshift(nextLayer) // pushes the next array of numbers to the front of the array
//   }
//   return numArr
// }


// function arraySums(arr) {
//   let sumArr = []

//   for (let i = 0; i < arr.length-1; i++) {
//     sumArr.push(arr[i] + arr[i+1]) // the first number of the index plus the number after (2 + 3) (3 + 7) (7 + 5)....
//   }
//   return sumArr
