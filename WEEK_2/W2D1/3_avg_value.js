/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/
// init a sum variable
//loop through the array and collect the sum of the scores
// return the sum divided by the array.length


function avgValue(array) { 
    
    let sum = 0

    for(let i = 0; i < array.length; i++) {
    sum += array[i]

}
return sum / array.length;
}
console.log(avgValue([10, 20]))
console.log(avgValue([2, 3, 7]))
console.log(avgValue([100, 60, 64]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
