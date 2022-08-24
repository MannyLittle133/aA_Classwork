/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  let string = ('')

  for (let i = 0; i < words.length; i++) {
    let word = words[i] 
    let letter = word.toLowerCase()
    let newWord = letter[0].toUpperCase() + letter.slice(1).toLowerCase()
    
    if (i === 0) {
       string += letter
      } else {
        string += newWord
      }

  }
  return string;
}
console.log(variableNameify(['is', 'prime'])) 
console.log(variableNameify(['remove', 'last', 'vowel'])) 
console.log(variableNameify(['MaX', 'VALUE'])) 
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;












// function variableNameify(words) {

//   let string = ('')
  

//   for (let i = 0; i < words.length; i++) {
//     let str = words[i]
//     let letter = str.toLowerCase()
//     let newWords = letter[0].toUpperCase() + letter.slice(1).toLowerCase()
    
//     if (i === 0) {
//       string += letter
//     } else {
//       string += newWords
//     }
//   }
//   return string;
// }