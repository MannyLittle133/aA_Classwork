/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

function moreDotLessDash(str) {
    return str.split('.').length > str.split('-').length


    // for (let i = 0; i < str.length; i++) {
    //     if (period < dash) {
    //         return true
    //     }
    //     return false
    // }
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'))
console.log(moreDotLessDash('.-.-.'))
console.log(moreDotLessDash('.-'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
