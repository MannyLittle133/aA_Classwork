/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

// const arrayBuilder = require("../../A4/problems/1_array_builder")

function passingStudents(students) {
  let passedStudents = [] // creates new array

  for (let student of students) { // keys into students while creating student as a variable for the objects elements in the array
    let total = 0 // sets the total for each of the objects
    let grade = student.grades //key into the value of the students grades

    for (let i = 0; i < grade.length; i++) { // loops through the grades of the students 
      obj = grade[i] // obj becomes every element in the array of the grades
      total += obj.score // increase the total by each number(score) we see in the array of grades
    }

    let avg = total / grade.length // the total amount of scores added up and then divided by the number of scores to get the average
    if (avg >= 70) // if the avg is equal to or greater than 70
    passedStudents.push(student.name) // push that students name into the array
  }
    
  return passedStudents // return the array
}

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

console.log(passingStudents(students)); // => [ 'Kush', 'Ned' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
