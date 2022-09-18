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
  let words = sentence.split(' ')
  let longest = ''
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i]
    
    if (currentWord.length >= longest.length) { // 
      // console.log(longest)
      longest = currentWord
      
    }  
  }
    return longest
}



console.log(longestWord('app academy is cool')); // => 'academy'

console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
