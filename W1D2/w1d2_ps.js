// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// // Examples:
// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true

// function isOdd(num) {
//     // your code here...
//   }

// var num = 33; 
// if (num > 7) {
//   console.log('true');
// } else if (num < 57) {
//   console.log('');
// } else {

//   console.log(0);
// }



// function isOdd(num) {
//     if(num % 2 !== 0) {
//         return true
//     } else{
//         return false
//     }
// }

// function isOdd(num) {
//     if(num % 5 !== 0) {
//         return true 
//     } else{
//         return false
//     }
// }





// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    return num + 5
  }

let something = plusFive(100)
console.log(something)
console.log(plusFive(100))

// console.log("i am the best programmer in the world")

function water(name) {
    // This is where we define what water will do 
    console.log(name + " is the best programmer in the world")
}
water("cornell")
