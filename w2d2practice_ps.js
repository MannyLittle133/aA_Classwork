




// // init a sum variable that will collect the sum of all the primes below the nuber for me
// //create is prime function
// //loop through all the numbers less than or equal to the number that is being passed into the function




// function laligatSum(num) {
//     let sum = 0
//     for (let n =  2; n <= num; n++) {
//         if (isPrime(n)) {
//             sum += n;
//         }
//     }
// }

// function isPrime(num) {

//     if (num < 2) return false;

//     for(let n = 2; n < num; n++) {
//         if (num % n === 0) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(laligatSum(10))



// objects


let cat = {
    name: 'whiskers',
    age: 2,
    color: 'orange'
};

let cats = ['whiskers', 'garfield', 'bobo']

console.log(cat)


let dog = {}

dog['name'] = 'fido'
dog['age'] = 4
dog['color'] = 'brown'

console.log(dog)


let pokemon = {
    id: 25,
    name: 'pikachu',
    color: 'yellow',
    type: 'electric',
    weight: '50',
    attacks: ['thunderbolt'],
    'test-attr': true
}

function printObj(obj) {
    for (let key in obj) {
        let val = obj[key];

        console.log(key = ' : ' + val)
    }
}

printObj(pokemon)


function elementCount(word) {
    let obj = {};
    for(let i = 0; i < word.length; i++) {
        let char = word[i];
        if(obj[char] === undefined) {
            obj[char] = 1 
        } else {
            obj[char] += 1
        }
    }
    return obj;
}

