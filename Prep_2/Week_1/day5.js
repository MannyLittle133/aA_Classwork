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



function quickSortz(arr) {
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
    let right = quickSort(arr.filter(ele => ele <= pivot))
    return left.concat([pivot], right)
}


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
    return arr
}



function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}


function bubbleSort(arr) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] > arr[i + 1])
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            sorted = false
        }
    }
    return arr
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}

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
    return arr
}




function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
    
}

function bubbleSort(arr) {
    let sorted = false
    while(!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

function merge(left, right) {
    let merged = []
    while (left.left && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left,right)
}


console.log(mergeSort([5, 3, 21, 6, 7, 52, 71, 8]))


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return (left, right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = merge(arr.slice(mid))
    return (left, right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    return (left, right)
}

function bubbleSort(arr) {
    let sorted = false
    while(!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }
    return arr
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return (left,right)
}


function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr.shift()
    let left = quickSort(arr.filter(ele => ele <= pivot))
    let right = quickSort(arr.filter(ele => ele > pivot))
    return left.concat([pivot], right)
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

function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left.length[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right)
}


function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left.length[0] < right.length[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left,right)
}



function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left.length[0] < right.length[0]) {
            merged.push(left.shift())

        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right)
}



function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left.length[0] < right.length[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right)
}


function merge(left,right) {
    let merged = []
    while (left.length && right.length) {
        if (left.ength[0] < right.length[0]) {
            merged.push(left.shift())
        } else {
            merged.push(left.shift())
        }
    }
    return merged.concat(left, right)
}



function merge(left, right) {
    let merged = []
    while (left.length && right.length) {
        if (left.length[0] < right.length[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right)
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left,right) {
    let merged = []
    while (left.length && right.length) {
        if (left.length[0] < right.length[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())

        }
    }
    return merged.concat(left, right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2) // mid is the middle of thr array and to get half of anything we divide by 2
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


// BINARY SEARCH // array must be sorted in order to work// array must be sorted 


function binarySearch(arr, target) {
    if (arr.length === 0) return -1
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)
    if (arr[mid] === target) {
        return mid 
    } else if (target < arr[mid]) {
        return binarySearch(left, target)
    } else {
        let res = binarySearch(right, target)
        return res === -1 ? -1 : res + mid + 1
    }
}


function binarySearch(arr, target) {
    if (arr.length === 0) return -1
    let mid = math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)
    if (arr[mid] === target) {
        return mid
    } else if (target < arr[mid]) {
        return binarySearch(left, target)
    } else {
        let res = binarySearch(right, target)
        return res === -1 ? -1 : res + mid + 1
    }
}

function binarySearch(arr, target) {
    if ()
}