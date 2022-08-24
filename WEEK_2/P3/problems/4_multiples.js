/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

function multiples(max, num){
    let newNums = []
    for (let i = num; i < max; i += num) {
        // if (max %  === 0)
         newNums.push(i)
        
    }
    return newNums
}
console.log(multiples(10, 2))
console.log(multiples(15, 3))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = multiples;
