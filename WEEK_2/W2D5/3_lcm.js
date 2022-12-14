/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

function lcm(num1, num2) {

    for (let i = 1; true; i += 1) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}

console.log(lcm(2, 3)); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = lcm;
