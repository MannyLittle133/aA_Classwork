




// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.


// function isInside(array, ele) {

//     return array.indexOf(ele) > -1;
// }

// //
// // HINT: use indexOf
// //
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred')) // => false




// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//

// function reverseStr(str) {
//     var reversed = '';
  
//     for (var i = str.length - 1; i >= 0; i -= 1) {
//       var char = str[i];
//       reversed += char;
//     }
  
//     return reversed;
//   }

  

// // Examples:
// //
// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
// //


// // function luckySevens(max) {

// //     array = []

// //     for (let i = 7; i <= max; i += 7) {

// //         if (i % 7 === 0) {
// //             array.push(i)
// //         }

// //     }

// //     return array
// // }





// // // Examples:
// // //
// // console.log(luckySevens(25)); // => [ 7, 14, 21 ]
// // luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]


// // Write a function `copyMachine(element, num)` that takes in an element and a number
// // it should return an array of length `num` that is filled with `element`.
// //

// function copyMachine(element, num) {

//    let arrayNum = []; 

//    for (let i = 0; i < num; i += 1) {
      
//         arrayNum.push(element);

//    }
   
//    return arrayNum
// }




// // Examples:
// //
// console.log(copyMachine('candy', 0)); // => []
// console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
// // copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]


// // Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// // an array containing every other word in that sentence.
// //

// function everyOtherWord(sentence) {
//     let words = sentence.split(" ")
//     let arr = [] 

//    for (let i = 0; i < words.length; i += 2) {
//         let word = words[i]
//         arr.push(word)
//    } 
//    return arr;

// }




// // Examples:
// //
// console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"

function wordYeller(sentence) {
   let punc =  sentence.split("  ")

    for(let i = 0; i < words.length; i ++) {
        let word = words[i]
        let newWord = word + "!"
    }
}




console.log("hello! bootcamp!")
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true


// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true