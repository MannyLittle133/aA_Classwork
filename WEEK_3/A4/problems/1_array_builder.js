/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/
//function takes in a count object 
//returns an array 
// number of elements must be included in the array
// ceate a new array 
// for every number of objects print that amount of objects




function arrayBuilder(count) {

  let arr = []

  for (let key in count) {
    for (let i = 0; i < count[key]; i++) {
      arr.push(key)
    }
  }
  return arr
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
