/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
  let bigRam = []
  let words = sentence.split(' ')
  for (let i = 0; i < words.length-1; i++) {
    
    // console.log(word)
    let current = words[i]
    let next = words[i+1]
    
    bigRam.push(current +' ' + next)
    
  }
  return bigRam
}
console.log(bigramArray('today is a great day')) 
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bigramArray;
