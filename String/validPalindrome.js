////Given a string s, return true if the s can be palindrome after deleting at most one character from it.

//o(n^2)
function validPalindrome(s){
    if(!s) return false;
    if(!isUnique(s)){ //o(n)
        if(isPalindrome(s)) return true; //o(n)
        for(let i = 0; i<s.length; i++){
            if(isPalindrome(s.replace(s[i], '')))
                return true;
        }
    }
    return false;
}


//o(n)
function isUnique(word){
    let collection = [];
    for(let i =0; i < word.length; i++){
        if(!collection.includes(word[i])){
           collection.push(word[i])
        } 
    }
    return word.length == collection.length ?  true :  false;
}

//o(n)
function isPalindrome(input){
    var newStr = "";
    let j = input.length - 1;
    for(let i = 0; i< input.length; i++){
        newStr += input[j];
        j--;
    }
    if(input.toUpperCase() === newStr.toUpperCase())
        return true;
    else
        return false;
}


var isValidPalindrome = validPalindrome('abca');
console.log(isValidPalindrome);