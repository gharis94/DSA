//Check if given string is palindrome

//using built in js methods
const isPalindrome=(str)=>{
    let newStr = str.split('').reverse().join('').toLowerCase();

    return newStr === str.toLowerCase();
}

const isPalindrome2=(str)=>{
    let newStr = str.toLowerCase();
    let left=0;
    let right=newStr.length-1;
    while(right>left){
        if(newStr[left] !== newStr[right]) return false;
        right--;
        left++;
    }
    return true;
}

const x = isPalindrome2('noon');
console.log(x)