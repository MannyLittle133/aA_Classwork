
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:








// function solution(str, ending){
//     for (let i = 0; i < str.length; i++) {
//         let letters1 = str[i]

//         for (let j = 0; j < str.length; j++) {
//             let letters2 = str[j]

//             if (letters1 + letters2 === ending) {
//                 return true
//             }
//         }
        
        
//     }
    
//     return false
// }

// function solution(str, end){
//     return str.indexOf(end, str.length - end.length) !== -1;
//   }
// console.log(solution('abc', 'bc')) // returns true
// console.log(solution('abc', 'd')) // returns false




// Write a method funny _phrases that accepts an
// array of strings.
// The method should return an array containing
// all strings that are at least 6 characters long and
// also end with "y".




// funny _phrases (["absolutely",
// "fly",
// "sorry", "taxonomy", "eighty",
// "excellent"])
// # => ("'absolutely",
// "taxonomy"
// "eighty"]
// funny _phrases (["terrible",
// "normally", "naughty", "party"])
// # => ["normally", "naughty"]
// funny _phrases (["tour", "guy"
// "pizza"])
// # => 0)