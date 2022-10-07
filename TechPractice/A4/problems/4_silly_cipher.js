/*******************************************************************************




Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

// Return a string where every character is replaced with its corresponding value in the cipher.
// If the character doesn't exist in the cipher, use a dot (.)



function sillyCipher(sentence, cipher) {
  let char = sentence.split('')
  let sillyArr = []

  for (let i = 0; i < char.length; i++) {
    let letter = char[i]

    if (cipher[letter] !== undefined) {
      sillyArr.push(cipher[letter])
    } else {
      sillyArr.push('.')
    }
  }
  return sillyArr.join('')
}


console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})) //=> 'cxxro'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;