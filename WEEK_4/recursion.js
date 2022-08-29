function multiply(num1,num2) {

    if (num1 === 0) return 0;
    return num2 + multiply(num1 -1,num2)
}

console.log(multiply(3,5))

// what ever can be done recursively can be done itteratively



function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n -1)
}

console.log(factorial(5))


function fibonacci(n) { // 6
    if(n === 1 || n === 2) { //base case
        return 1
    }

    let previous = fibonacci(n - 1) // fib(4)
    let secondPrevious = fibonacci(n - 2) // fib(3)

    return previous + secondPrevious; // fib(4) + fib(3)
}

console.log(fibonacci(5)) // fib(5) = 2 + 3 = fib(3) + fib(4)
console.log(fibonacci(7)) // fib(7) = 5 + 8 = fib(5) + fib(6)