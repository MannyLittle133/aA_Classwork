/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
  let words = sentence.split(' ')
  let newStr = ''
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    // let newWord = removeVowel(word)
    
    newStr += removeVowel(word) + ('')
  }
  return newStr
}

function removeVowel(word) {
  let vowel = 'aeiou'
  let newStr = ''
  
  for (let i = word.length -1; i >= 0; i--) {
    let char = word[i]

    if (vowel.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1)
    } 
  }
  return newStr
}

// function disemvowel(str) {
//   var newStr = "",
//       i;

//   for (i = 0; i < str.length; i++) {
//       if ("aeiou".includes(str[i].toLowerCase())) continue;
//       newStr += str[i];
//   }
//   return newStr;
// }

console.log(hipsterfy("apple")); // => "propr tonc panthr"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
// module.exports = hipsterfy;











// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }



