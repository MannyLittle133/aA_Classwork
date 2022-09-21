/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/

function negativeSum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        let nums = arr[i]
        if (nums < 0) {
            sum += nums
        }
    }
    return sum

}
console.log(negativeSum([-3, 12, -5, -2, 3])); // => -10
console.log(negativeSum([2, 1, 7]));           // => 0
/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = negativeSum;
