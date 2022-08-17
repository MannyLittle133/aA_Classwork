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
  
  for (let i = 0; i < words.length; i += 1) {
    let word = words[i]

    if (word.length > longest.length) {
        longest = word

    }else if (word.length === longest.length) {
      longest = word
    }


  }
  return longest
}

// console.log(longestWord('app academy is cool')); // => 'academy'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('bootcamp')); // => 'bootcamp'
// console.log(longestWord('')); // => ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
