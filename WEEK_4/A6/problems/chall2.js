// // // function oddSum(nums) {
// // //     let oddCount = 0
// // //     for (let i = 1; i < nums.length; i += 2) {
// // //        let newNum = nums[i]

// // //        if (i === newNum) {
// // //         oddCount += i
// // //        }


// // //     }
// // //     return oddCount + i
// // //    }



// // // console.log(oddSum([5, 4, 6, 13, 1]))



// // // function strangeWords(words) {

// // //     return words.filter(word => {
// // //        //Your conditions here.
// // //        return (word.length < 6 && word[0] !== "e" || word[0] === "e" && word.length > 6) 
// // //     }


// // function strangeWords(words) {
// // //     let newWords = []
    
// // //     for (let i = 0; i < words.length; i++) {
// // //         if (words[i].length < 6 && words[i][0] !== 'e' || words[i][0] !== 'e' && words[i].length > 6) {
// // //            newWords.push(words[i]) 
// // //         }
// // //     }
// // //     return newWords
// // //  }


// // function biggerFilter(nums, target) {
//     //     array = []
    
//     //     for (let i = 0; i <= nums.length; i++) {
//         //         let newNum = array[i] 
//         //         if (target < newNum) {
//             //             array.push(newNum)
//             //         }
//             //     }
//             //     return array
//             //    }
            
//             // console.log(biggerFilter([7, 3, 2, 8, 12], 5))
            
            
// function strangeWords(words)
// {
//     let result = [];
//     let isShorterThanSix;
//     let isBeginWithE;

//     for(var i = 0; i < words.length; i++) {
//         isShorterThanSix = words[i].length < 6;
//         isBeginWithE = words[i][0] === 'e';

//         if(isShorterThanSix || isBeginWithE){
//             if(isShorterThanSix && isBeginWithE){
//                 continue;
//             }
//             //Add only the needed items to the result
//             result.push(words[i]);
//         }

//       return result;
//   }
// }
// console.log(strangeWords(["eating", "proper", "key", "earth"]))


// function multipleSelect(nums, target) {
//     let divNum = []
    
//     for (let i = 0; i < nums.length; i++) {
//         let ele = nums[i]
        
//         if (ele % target === 0)
//         divNum.push(ele)
//     }
//    }

// function lastIndex(str, char) {
//     for (let i = str.length -1; i >= 0; i--) { // reverse loop decrements of -1
      
//       let ele = str[i]; //make the variable for the character in the string 
      
//       if (char === ele) { //compare the ele to the char in question

//           return i;
//       }
     
//   }

// }
//   console.log(lastIndex("abca", "a"))        // 3
//   console.log(lastIndex("mississipi", "i"))  // 9
//   console.log(lastIndex("octagon", "o"))     // 5
//   console.log(lastIndex("programming", "m")) // 7




function mostVowels(sentence) {
    let counts = {};
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        counts[word] = countVowels(word);
    }

    let largestNum = 0;
    let largestWord = '';

    for (key in counts) {
        if (counts[key] > largestNum) {
            largestNum = counts[key];
            largestWord = key
        }
    }
    return largestWord
}

function countVowels(word) {
    let count = 0;
    let vowels = 'aeiou';

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count ++;
        }
    }
    return count;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"




function prime(num) {
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
  
  console.log(prime(2))  // true
  console.log(prime(5))  // true
  console.log(prime(11)) // true
  console.log(prime(4))  // false
  console.log(prime(9))  // false
  console.log(prime(-5)) // false

  
  
  
  
  
  
  
  
  
  
  
  function pickPrimes(array) {
    let newNums = []

    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        if (num % 2 !== 0 || (num === 2)) {
            newNums.push(num)
        }
    } 
    return newNums
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]


//driver types/
//navigator navigates 


//anagrams 'evil' 'live'

function anagrams(str1, str2) {
    if (str1.length !== statusbar.length) return false;

    let wordCount = {};
    for (let i = 0; i < str1.length; i++) {
        let char1 = st1r[i]
        let char2 = str2[i]

        if (char1 in wordCount){
            wordCount[char2]--;
        } else {
            wordCount[char2] = -1
        }
    }

    for (let key in wordCount) {
        if (wordCount[key] !== 0) return false;
    }

    return true;
}