/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  let bestStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'W') {
      currentStreak += 1;

      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return bestStreak;
}


console.log(bestWinStreak('WWLWWWLWW'))
console.log(bestWinStreak('WWLLWWWWW'))
console.log(bestWinStreak('WWWW'))
console.log(bestWinStreak('LLL'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;









// let longestStreak = 0
// let letters = str.split(' ')

// for (let i = 0; i < letters.length; i++) {
//   let current = letters[i]
//   let next = letters[i+1]
//   console.log(next)

//   if (current === next) {
//     longestStreak += 1
//   }
// }
// return longestStreak