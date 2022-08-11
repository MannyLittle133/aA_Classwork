/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

//if a number is greater than all other words in the array print the index



function peakFinder(array) {

    let peaks = [] 
   
    for(let i = 0; i < array.length; i++) {
        let current = array[i]; 
        let next = array[i + 1]; 
        let prev = array[i -1];
        if (i === 0 && current > next) {
            peaks.push(i);
        } else if (i === array.length - 1 && array[i] > array [i - 1]) {
            peaks.push(i)
        }else if(array[i] > array[i - 1] && array[i] > array[i + 1] ) {
            peaks.push(i)
        }
    }
    return peaks;
}

  
console.log(peakFinder([1, 2, 3, 2, 1]))
console.log(peakFinder([2, 1, 2, 3, 4, 5]))
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = peakFinder;
