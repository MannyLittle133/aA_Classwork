/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let newSen = sentence.split(' ')
  let longest = ''

  for (let i = 0; i < newSen.length; i++) {
    let currentWord = newSen[i] 

    if (currentWord.length >= longest.length) {
      longest = currentWord
    }
  }
  return longest
}


// console.log(longestWord('app academy is cool')); // => 'academy'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = longestWord;




// let sen = sentence.split(' ')
// let longest = ''

// for (let i = 0; i < sen.length; i++) {
//   let word = sen[i]

//   if (word.length >= longest.length) {
//     longest = word
//   }
// }
// return longest