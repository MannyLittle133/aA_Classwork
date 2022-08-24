/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/

function elementCount(array) {

    let obj = {}

    for (let i = 0; i < array.length; i++) {
        // console.log[array[i]]
        let ele = array[i]
        // console.log(obj[ele])
        if (obj[ele] === undefined) {
            obj[ele] = 1;
        } else {
            obj[ele] += 1;
        }
    }

    return obj;
}

console.log(elementCount(["a", "a", "b", "b"]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = elementCount;
