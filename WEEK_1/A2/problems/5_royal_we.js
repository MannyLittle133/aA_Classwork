/*******************************************************************************
Write a function royalWe(sentence) that returns a string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) { 

    let words = sentence.split(' ')
        //words = ['I', 'want', 'to', 'go', 'to', 'the', 'store']
        // console.log(words)
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i])
        if (words[i] === 'I') {
            words[i] = 'we'
        } else if (words[i] === 'mine'){
            words[i] = 'ours'
        } else if (words[i] === 'my') {
            words[i] = 'our'
        } else if (words[i] === 'me') {
            words[i] = 'us'
        }      
    }
 
    return words.join(' ');
}


console.log(royalWe("This is my house and you will respect me"))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
