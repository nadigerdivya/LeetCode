//validAnagram.js

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//A word is said to be an anagram of another when it can be formed by rearranging the letters 
//of the other word using each letter just once. E.g listen is an anagram of silent.

//o(n)
function isAnagram(s1, s2){
    if(!s1 && !s2) return false;
    if(s1.length != s2.length) return false;

    let set = new Set(s1);
    for(let i = 0; i < s2.length; i++){
        if(set.has(s2[i]))
            continue;
        else
            return false;
    }

    return true;
}

var isAnagram = isAnagram('silent', 'listen');
console.log(isAnagram);