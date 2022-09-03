// BUBBLE SORT

function bubbleSort(arr) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 21, 6, 7, 52, 71, 8]))


// MERGE SORT //O(nlog(n)) // linearythmic

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right)
}

console.log(mergeSort([5, 3, 21, 6, 7, 52, 71, 8]))


// QUICK SORT

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot)) // arr.filter function ele return where ele is less than or = to pivot
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}



console.log(quickSort([5, 3, 21, 6, 7, 52, 71, 8]))

// BINARY SEARCH // array must be sorted in order to work// array must be sorted 

function binarySearch(arr, target) { // O of log of N // logirythmic time
    if (arr.length === 0) return -1
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0 , mid) 
    let right = arr.slice(mid + 1);
    if (arr[mid] === target) {
        return mid
    } else if (target < arr[mid]) {
        return binarySearch(left, target) 
    } else {
        let res = binarySearch(right, target)
        return res === -1 ? -1 : res + mid + 1;

    }  
            
}

console.log(binarySearch(quickSort([5, 3, 21, 6, 7, 52, 71, 8]), 52))

function isUniqueAnagram(word1, word2) { // O(n * m)
    if (word1.length !== word2.length) {
        return false
    }

    for (let i = 0; i < word1.length; i++) {
        let letter = word1[i]

        if (word2.indexOf(letter) === -1) {
            return false
        }
    }
    return true
}

function anagrams(word1, word2) { // multiplicative constant // O of 2N
    if (word1.length !== word2.length) return false;
    let obj = {}

    for (let i = 0; i < word1.length; i++) {

    }
        
    
}


const fib = (n) => { //
    if (n === 1 || n === 2) return 1
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(8))

//memoization

const fibs = (n, memo = {}) => {
    if (n === 1 || n === 2) return 1;
    if (memo[n]) return memo[n];
    memo[n] = fibs(n - 1, memo) + fibs(n - 2, memo)
    return memo[n]
}

console.log(fibs(90))
