/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  let people = []

  for (let i = 0; i < names.length; i++) {
    let kids = names[i].split(' ')
    // console.log(kids)
    let first = kids[0][0]
    // console.log(first)
    let last = kids[1]
    // console.log(last)
    let user = first.concat(last)
    people.push(user)
  }
  return people
}

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];
console.log(usernames(names))
/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
