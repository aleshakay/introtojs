console.log('Arrays')

const indexAndPrint =(arr, index)=>{
    console.log(arr[index])
}

const myArray = [1, 2, 8, 'bee', 'last', 'first']

indexAndPrint(myArray,2)

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array
let i = 0;
const checkName =(arr) =>{
do{
    if (arr[i] == 'Greg'){
        console.log(`The name is ${arr[i]}`)
    } else 
        {console.log(`Name is ${arr[i]}`)
    }
    i++;
}while (i < arr.length);
}
console.log(checkName(['peter','katherine', 'greg']));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('')
    const reversedArray = arrayFromString.reverse()
    const opposite = reversedArray.join('')
    if (str === opposite){
         return true
    }else {
        return false
    }
}

console.log(isItAPalindrome("kat"));
console.log(isItAPalindrome("mom"))