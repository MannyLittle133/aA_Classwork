

function randomNumbers(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(i)
        console.log(array[i])
    }

}

randomNumbers([2, 18, 6, 22, 5])


function compare(string, subString) {
    let array = [];
    // let string1 = string.split('')
    // let string2 = subString.split('')

    for (let i = 0; i < string.length; i++){
        let str1 = string[i]

        for (let j = 0; j < subString.length; j++) { //we need to reference a different variable that isn't i
            let str2 = subString[j]

            if (str1.includes(str2)) {
                array.push(str2)
            }
        }

    }
        
    return array;
}

console.log(compare('twenty', 'teen'))
console.log(compare('daisy', 'diary'))
console.log(compare('tennis', 'tenth'))


function isPrime(num) { //be sure to loop through all nums between 2 and num excluding num
    if (num < 2) {
        return false
    }

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            return false
        } 
    }


    return true
}

console.log(isPrime(7))



function arrayPrimes(nums) {
    let array = []

    for (let i = 0; i < nums.length; i++) { //be sure to initialize at 0 to get the first element
        let primeNums = nums[i]
        if (isPrime(primeNums)) {
            array.push(true)
        } else {
            array.push(false)
        }
    }
    return array;
}

console.log(arrayPrimes([2, 5, 7, 12, 20]))
console.log(arrayPrimes([37, 1, -5]))