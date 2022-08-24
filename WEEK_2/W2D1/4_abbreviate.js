/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
//init a new array
//create a words array that is equal to the sentence.split(' ')
//loop through the wors array
//check the length of each word
//if less than or equal to 4 do nothing
//else remove all vowels
//creat a new function that removesall the vowels for us
//pass the words to a new function
//init vowels array
//init a new string variable
//loop through the word
//if its a constanant cancatinate to the new word
//else do nothing
//return the new word




function abbreviate(sentence) {

    let newArray = []
    let words = sentence.split(' ') 

        for (let i = 0; i < words.length; i++) {
            let word = words[i]
            if (word.length <= 4) {
                newArray.push(word)

            } else {
                newArray.push(removeVowels(word))
                
            }
        }

function removeVowels(word) {
    let vowels = 'aeiou';
    let newWord = ''
    for (let i = 0; i < words.length; i++) {
        
    }
}        
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
