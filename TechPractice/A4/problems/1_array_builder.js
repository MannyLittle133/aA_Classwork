/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/
// takes in a count object and returns an array filled with the appropriate numbers of elements.
// repeated elements should be grouped.
function arrayBuilder(count) {
  let arr = []
  for (let pets in count) {
    for (let i = 0; i < count[pets]; i++) {
      arr.push(pets)
    }
  }
  return arr
}
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;













// let petArr = []
// for (let pets in count) {
//   for (let i = 0; i < count[pets]; i++) {
//     petArr.push(pets)
//   }
// }
// return petArr