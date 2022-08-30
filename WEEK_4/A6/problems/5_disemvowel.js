/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {

    let vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    }
  
    let result = "";
  
    for (let i = 0; i < string.length; i++) {
      let letter = string[i].toLowerCase();

      if (!vowels[letter]) {

        result += string[i];
        
      }
    }
    return result;
  }


console.log(disemvowel('bootcamp')); // => 'btcmp'
console.log(disemvowel('PREP')); // => 'PRP'
console.log(disemvowel('hello world')); // => 'hll wrld'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
