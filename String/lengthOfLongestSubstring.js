//Given a string s, find the length of the longest substring without repeating characters.

//o(n^2)
function lengthOfLongestSubstring(str){
    if(!str) return 0;
    let uniqueCharCount = uniqueChars(str).length; //o(n)
    while(uniqueCharCount >= 1){
        for(let i =0; i < str.length; i++){
            let substr = str.substr(i, uniqueCharCount);
            if(substr.length == uniqueCharCount){
                if(uniqueChars(substr).length == substr.length) {
                    return substr.length;
                }
            }
        }
        uniqueCharCount--;
    }
}

//o(n)
function uniqueChars(word){
    let collection = [];
    if(!word) return false
    for(let i =0; i < word.length; i++){
        if(!collection.includes(word[i])){
           collection.push(word[i])
        } 
    }
    return collection;
}



var length = lengthOfLongestSubstring("b");
console.log(length);