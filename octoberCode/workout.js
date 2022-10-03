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


function aCounter(word) {
    let index = 0
    let count = 0

    while (index < word.length) {
        let char = word[index]
        if(char === 'a' || char === 'A') {
            count += 1
        }
        index++
    }
    return count
}

console.log(aCounter('Amasheka'))
console.log(aCounter('Manny'))
console.log(aCounter('Aaliyah'))



function pigLatinWord(word) {
    let vowel = 'aeiou'
    
    if (vowel.includes(word[0])) {
        return word + 'yay'
        } 
    
    for(let i = 0; i < word.length; i++) {
        let char = word[i]
        
        if (vowel.includes(char)) {
            let firstPart = word.slice(i)
            // console.log(firstPart)
            let secondPart = word.slice(0,i)
            // console.log(secondPart)
            return firstPart + secondPart + 'ay'
        }
    }
    return word
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

function uncompress(str) {
    let newStr = ''
    
    for (let i = 1; i < str.length; i += 2) { 
        let num = Number(str[i])
        
        let letter = str[i-1]
        
        for (let j = 0; j < num; j++) {
            newStr += letter;
        }
    }
    
    return newStr
}





console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

function uncompress(str) {
    let newStr = ''
    
    for (let i = 1; i < str.length; i += 2) {
        let num = Number(str[i])
        
        let letter = str[i-1]
        
        let j = 0;
        while (j < num) {
            newStr += letter;
            j++
        }
    }
    
    return newStr
}

function uncompress(str) {
    let newStr = ''
    
    for (let i = 1; i < str.length; i += 2) {
        let num = Number(str[i])
        
        let letter = str[i-1]
        
        let j = 1;
        while (j <= num) {
            newStr += letter;
            j++
        }
    }
    
    return newStr
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

let person1 = {
    'name' : 'johnathan',
    'height' : "5'8",
    "weight" : "155",
    "color" : "brown"
}

let person2 = {
    'name' : 'Manny',
    'height' : "5'10",
    "weight" : "215",
    "color" : "brown"
}

classPerson = {
    constructor(name ,height, weight, color) {
        this.name = name,
        this.height = height,
        this.weight = weight,
        this.color = color
    }
}

let p1 = newPerson("johnathan", "5'8", "155", "brown")

addWeight(num) {
    this.weight += num
}

let p1 = newPerson // creates a new instance


// encaptulation takes the logic that would have been extra key value pairs

// person class has its own attributes

// when creating a class .... 
// 1 - empty object is created; 
// 2 - constructor method is called and is bound to an object 
// 3 - new object is returned after constructor method is completed

class Person { //  empty object
    constructor (name, height, weight, color) { // 2 - constructor method is called and is bound to an object 
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.color = color;
    }
    addWeight(num) {
        this.weight += num;
    }
}
let jonathan = new Person("Jonathan", "5'8", 155, "brow");
let joe = new Person("Joe", "6'2", 250, "white");
console.log("Person name: ", jonathan.name);
console.log(jonathan.weight)
console.log(jonathan.addWeight(100));
console.log(jonathan.weight)
console.log("");
console.log("Person name: ", joe.name);
console.log(joe.weight)


// OOP - employee manager project
// build a tie ------ 
class Trie {
    constructor(parent, children = [], value, complete) {
        this.parent = parent
        this.children = children
        this.value = value
        this.complete = complete
    }
}



