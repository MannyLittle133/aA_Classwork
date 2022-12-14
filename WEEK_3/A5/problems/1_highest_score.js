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

  let maxScore = students[0].score
  let pointer = 0
  let firstNameLastName = ''
  let id = students[0].id
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > maxScore) {
      maxScore = students[i].score
      pointer = i
      id = students[i].id
    }
    firstNameLastName = students[pointer].name.split(' ')
  }
  let initialsID = firstNameLastName[0][0] + firstNameLastName[1][0] + id

  // console.log(initialsID)
  return initialsID;
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


// function highestScore(students) {

//   let highScore = ('')

//   for (let i = 0 ; i < students.length; i++) {
//     let student = students[i]
//     let grd = student.grade

//     if (grd >= 99) {
//       grd += highScore
//     } else {
     
//     } 
    



//   }
  
  
// }
