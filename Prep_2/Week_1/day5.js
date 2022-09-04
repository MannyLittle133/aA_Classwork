// BUBBLE SORT  O of n squared aka quadratic aka SLOWWWWWW // worst case scenario is big O

//the length of the array is = n

function bubbleSort(arr) { // = n for O of n
    let sorted = false
    while (!sorted) { // while sorted is false loop
        sorted = true
        for (let i = 0; i < arr.length; i++) { // loop n times = arr.length
            if(arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr
}

console.log(bubbleSort([5, 3, 21, 6, 7, 52, 71, 8]))

// QUICK SORT

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot)) // arr.filter function ele return where ele is less than or = to pivot
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}

// console.log(quickSort([5, 3, 21, 6, 7, 52, 71, 8]))

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}


function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}


function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}



function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}


function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}
