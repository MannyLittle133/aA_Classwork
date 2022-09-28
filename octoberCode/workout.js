// Lets roll the dice. given an array and a target. list all combinations that sums up to the target.

// array [1,2,3,4,5] target is 6


// function rollDice(arr, target) {
//     let diceArr = []
    
//     for (let i = 0; i < arr.length; i++) {
//         let num1 = arr[i] // 1

//         for (let j = 0; j < arr.length; j++) {
//             let num2 = arr[j] // 1
            
//             if (num1 + num2 === target) {
//                 diceArr.push([i,j]) 
//             }
//         }
        
        
//     }
//     // let unique = [...new Set(diceArr)]
//     return diceArr
// }
// // console.log(unique)

// console.log(rollDice([1,2,3,4,5], 6))

// [
//     [0,4],[1,3],[2,2],[3,1],[4,0]
// ]


// **************************************************************

// function isHorizontalWin(board1) {

//     let xWin = 0
//     let oWin = 0

//     // console.log(across)
    
//     for (let i = 0; i < board1.length; i++) {
//         let subArr = board1[i]
//         // console.log(board1[i])
//         for (let j = 0; j < subArr.length; j++) {
//             let ele = subArr[j]
//             console.log(ele[j])
//             // console.log(board1[i])

//             // console.log([subArr[0], ele[0]])
            

//         }
//     }
// }

// const board1 = [
// ['X', 'X', 'X'],
// ['X', 'O', 'X'],
// ['O', 'X', 'O']
// ]
// console.log(isHorizontalWin(board1))

// ***************************************************************


let pineapple = `dog`

console.log(pineapple)

function sayHello(name) {
    return 'Hello ' + name + '!'
}

console.log(sayHello('Manny'))


function sayHello(name) {
    return `hello ${name}!`
}

console.log(sayHello('Manny'))


function tellStory(animal, adj, place) {
    return `My ${adj} ${animal} went to the ${place}.`
}

console.log(tellStory('dog', 'energetic', 'park'))