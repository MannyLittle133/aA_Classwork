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

function sillyCipher(sentence, cipher){
  let arr = []

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]

    if (cipher[letter] !== undefined) {
      console.log(cipher[letter])
      arr.push(cipher[letter])
    } else {
      arr.push('.')
    }
  }
  return arr.join('')
}
console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})) //=> '.ee....q.q..q!'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;














// let arr = []
// // let char = sentence.split('')

// for (let i = 0; i < sentence.length; i++){
//   let ele = sentence[i]

//   if (cipher[ele] !== undefined) {
//     arr.push(cipher[ele])
//   } else {
//     arr.push('.')
//   }
// }
// return arr.join('')
