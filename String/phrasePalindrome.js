////Given a string s, return true if it is a palindrome, or false otherwise.
////A phrase is a palindrome if, after converting all uppercase letters into 
////lowercase letters and removing all non-alphanumeric characters, 
////it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//o(n)
function validPalindrome(s){
    if(!s) return true;
    let RegExp =  /[^a-z]/g;
    return isPalindrome(s.toLowerCase().replace(RegExp,""));
}

//o(n)
function isPalindrome(input){
    //--------------------------------------
    //Using loops (left and right concept)
        // let left = 0; right = s.length - 1;
    
        // while(left < right) {
        //     if(s[left] !== s[right]) {
        //         return false
        //     }   
        //     left++;
        //     right--;
        // }
        // return true;

    var newStr = "";
    let j = input.length - 1;
    for(let i = 0; i< input.length; i++){
        newStr += input[j];
        j--;
    }
    if(input === newStr)
        return true;
    else
        return false;

    //------------------------------------------

    
        
}

//----------------------------------------------
//Using built-in functions.
//o(n)
// function validPalindrome(s){
//     s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//     let res = s.split('').reverse().join('')
//     console.log(res);
//     return res.toLowerCase() === s.toLowerCase() ? true : false
// }
//----------------------------------------------

var isValidPalindrome = validPalindrome("A man, a plan, a canal: Panama");
console.log(isValidPalindrome);