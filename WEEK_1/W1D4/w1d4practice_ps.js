













// // function logEach(array) {
// //     for (var i = 0; i < array.length; i += 1) {
// //         console.log(i + ':' + array[i]);
// //     }
// // }


// // logEach(["Anthony", "John", "Carson"])












// // // Write a function `logEach(array)` that prints every element of the array and its
// // // index to the console.

// // function logEach(array) {
// //     for (var i = 0; i < array.length; i += 1)
// //     console.log(i + ':' + array[i]);
// // }






// function logEach(array) {
//     for (var i = 0; i < array.length; i += 1)
//     console.log( i + ':' + array[i])
// }

// logEach(["Anthony", "John", "Carson"])















// function logEach(array) {
//     for (var i = 0; i < array.length; i += 1)
//     console.log(i + ':' + array[i])
// }

// logEach(["manny", "cj", "mal", "ryan", "kha", "max"])




  



// // //
// // // Example:
// // //
// // // logEach(["Anthony", "John", "Carson"]); // prints
// // // 0: Anthony
// // // 1: John
// // // 2: Carson



// function range(start, end) {
//     for (var start = 1; start < array.length; start += 1)
//     console.log(start <= array.length[start])
// }


// range(1,4)


// function range(start, end) {
//     var array = [];

//     for(var i = start; i <= end; i+= 1) {
//         array.push(i);
//     }
//     return array;
// }




// function range(start, end) {
    //     var array = [];
    
    //     for(var i = start; i <= end; i += 1) {
        //         array.push(i)
        //     }
        //     return array;
        // }
        
        
        
        // function range(start, end) {
            
            //     var array = []
            
            //     for(var i = start; i <= end; i += 1) {
                //         array.push(i) 
                
                //     }
                //     return array 
//                 // }
                
                
                
//                 // Write a function range(start, end) that returns an array that contains all
//                 // numbers between 'start' and 'end' in sequential order.
//                 //
//                 // Examples:
//                 //
                
// //                 console.log(range(10,40)) 
// //                 console.log(range(1,2)) 
                
                
                
                
                

// // function range(start, end) {
    
// //     var array = []

// //     for(var i = start; i <= end; i += 1)
// // }




// // Write a function `capWords(words)` that takes in an array of words and
// // returns a new array where every word is capitalized.
// //
// // Example:
// //
// // capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']



                
// function capWords(words) {
//     var newWords = [];

//     for (var i = 0; i < words.length; i += 1) {
//         var word = words[i];
//         var newWord = word.toUpperCase();
//         newWords.push(newWord);
//     }

//     return newWords;
// }               
                
                
       

// // var capped = (capWords(['hello', 'boOtCaMp', 'PREP!']))

// // console.log(capped);






// // Write a function sumArray(array) that takes in an array of numbers that returns the
// // total sum of them.
// //
// //

// // function sumArray(array) {
// //     let sum = 0;

// //     // num1 = 5
// //     // num2 = 

// //     for(let myNum = 0; myNum < array.length; myNum += 1) {
// //         let num  = array[myNum];
// //         sum += myNum;
// //     }
// //     return sum
// // } 


// function sumArray(array) {
//     let sum = 0;
  
//     for (let i = 0; i < array.length; i += 1) {
//       let num = array[i];
//       sum += num;
//     }
  
//     return sum;
//   }










// // Examples:
// //
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30














// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

// function logEach(array) {
//     for (let i = 0; i < array.length; i ++){
//         console.log(i + ': ' + array[i])
//     }
// }

// // Example:
// //
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//

// function range(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i++) {
//        array.push(i);
//     }
//     return array
// }


// // Examples:
// //
// console.log(range(1,4))
// console.log(range(4,2))

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//

// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i ++) {
//         let num = array[i]
//         sum += num
//     }
//     return sum
// }




// //
// // Examples:
// //
// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//

// function capWords(words) {
//     let newWords = [] 
//     for (let i = 0; i < words.length; i ++) {
//         let word = words[i]
//         let cappedWords = word.toUpperCase()
//         newWords.push(cappedWords)
//     }
    
// //     return newWords
// // }
// // // Example:
// // //
// // console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!'] 

// // Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// // sentence where every word has period after it.
// //

// function wordPeriods(sentence) {
//     let words = sentence.split(' ') // split on a space and covert the str into an array
//     let newWords = [] // new words equal to empty array - pushes elements into the array
//     // console.log(words)

//     for (let i = 0; i < words.length; i ++) { 
//         let word = words[i];
//         let roots = word + '.' // (hello + .)
//         newWords.push(roots)
//     }

//     let newSen = newWords.join(' ')
//     return newSen
// }


// // // Examples:
// // //w
// // console.log(wordPeriods('hello world')); // => 'hello. world.'
// // console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'


// // Write a function `myIndexOf(array, target)` that takes in an array of
// // numbers and a target number as arguments. It should return the index value
// // of the target if it is present in the array or -1 if it is not present.
// //

// function myIndexOf(array, target) {

// }






// // CONSTRAINT: Do not use the indexOf method.
// //
// // Examples:
// //
// console.log(myIndexOf([1,2,3,4],4)) 
// myIndexOf([5,6,7,8],2) => -1

//  


// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//

// function logEach(array) {
//     for (let i = 0; i < array.length; i ++) {
//         console.log(i + ': ' + array[i])
//     }
    
// }



// // Example:
// //
// (logEach(["Anthony", "John", "Carson"])); // prints
// 0: Anthony
// 1: John
// 2: Carson


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:

function range(start, end) {
    let range = []
    for (let i = start; i <= end; i ++) {
        range.push(i)
    }
    return range
}


//
console.log(range(1,4))
// range(4,2) => []