/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/
//create an array that the numbers can go in
//


function divisibleByThreePairSum(array) {

    let pairs = []

    for (let i = 0; i < array.length; i++) {
        let num1 = array[i]
        for (let j = i + 1; j < array.length; i++) {
            let num2 = array[j]
            if ((num1 + num2) % 3 === 0) {
                let pair = [i, j]
                pairs.push(pair)
            }
        }
        

    }
    return pairs;
}


console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]))
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleByThreePairSum;
