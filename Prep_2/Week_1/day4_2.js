// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.

function logEach(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i + ': ' + array[i])
    }
}


// Example:
//
console.log(logEach(["Anthony", "John", "Carson"])); // prints
// 0: Anthony
// 1: John
// 2: Carson

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.

function range(start, end) {
    let array = []
    for (let i = start; i <= end; i++) {
        array.push(i)
    }
    return array;
}

// Examples:
//
console.log(range(1,4)) 
console.log(range(4,2))

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.

function sumArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        let sum = array[i]
        total += sum
    }
    return total;
}

// Examples:
//
console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.

function capWords(words) {
    let array = []

    for (let i = 0; i < words.length; i++) {
        let capWords = words[i]
        array.push(capWords.toUpperCase())
    }
    return array;
}

// Example:
//
console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.

function wordPeriods(sentence) {
    let words = sentence.split(' ')
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        words[i] = word + '.'
    }
    let newSen = words.join(' ')
    return newSen
}

// Examples:
//
console.log(wordPeriods('hello world')); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.

function maxValue(array) {

    
    let max = null
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        
        if(num > max || max === null){
            max = num
        }
    }
    return max
    
    // let highest = null

    // for (let i = 0; i < array.length; i++) {
    //     let num = array[i]
    //     if (highest === null || num > highest) {
    //         highest = num
    //     }
    // }
    // return highest
}

// Examples:
//
console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.

function myIndexOf(array, target) {

    for (let i = 0; i < array.length; i++) {
        let num = array[i]

        if(num === target) {
            return i
        }
    }
    return -1
}

// Examples:
//
console.log(myIndexOf([1,2,3,4],4)) 
console.log(myIndexOf([5,6,7,8],2)) 
















// let max = null

// // largest = 0
// for (let i = 0; i < array.length; i++) {
//     let num = array[i]

//     if(num > max || max === null){
//         max = num
//     }
// }
// return max