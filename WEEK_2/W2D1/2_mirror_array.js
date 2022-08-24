/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
// two for loops
// one will lopp through the input array forward and push into a new array
// the second will loop through the array backward and push into the new array
//return newArray

function mirrorArray(array) {

    let newArray = []
    console.log(array)
        for (let i = 0; i < array.length; i++) {
        let ele = array[i];
    newArray.push(ele); 
    }
    for (let i = array.length - 1; i >= 0; i--) {
        let ele = array[i]
        newArray.push(ele)
    }
    return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
