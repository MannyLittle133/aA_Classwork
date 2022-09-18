/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  let newString = ''
  let highestScore = students[0].score
  let id = students[0].id
  let value = 0

  for (let idx = 0; idx < students.length; idx++) { // looping through the array of objects
    if (students[idx].score > highestScore) { // if students keyed in at scores is greater than highest score 
      highestScore = students[idx].score // highest score becomes the current score that is highest in the array
      id = students[idx].id // students keyed in at id becomes the id attatched to the student with the highest score
      value = idx // is  the index of the object we are focusing on thats inside the array
    }
  }
  initials = students[value].name.split(' ') // students keyed in at highest scored index has its name split into an array
  newString += initials[0][0] + initials[1][0] + id // new string becomes the first name at the 0th index and last name at the 0th index

  return newString
}

var students = [
  {name: 'Alvin Zablan', id: 128, score: -42},
  {name: 'Eliot Bradshaw', id: 32, score: 57},
  {name: 'Tommy Duek', id: 2, score: 99},
  {name: 'Fred Sladkey', id: 256, score: 94}
 ];
 
 console.log(highestScore(students)); //=> 'TD2'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
