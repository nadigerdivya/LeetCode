//Given a string s, find the length of the longest substring without repeating characters.

//o(n^2)
//function lengthOfLongestSubstring(s){
    // if(!str) return 0;
    // let uniqueCharCount = uniqueChars(str).length; //o(n)
    // while(uniqueCharCount >= 1){
    //     for(let i =0; i < str.length; i++){
    //         let substr = str.substr(i, uniqueCharCount);
    //         if(substr.length == uniqueCharCount){
    //             if(uniqueChars(substr).length == substr.length) {
    //                 return substr.length;
    //             }
    //         }
    //     }
    //     uniqueCharCount--;
    // }
//}
//o(n)
// function uniqueChars(word){
//     let collection = [];
//     if(!word) return false
//     for(let i =0; i < word.length; i++){
//         if(!collection.includes(word[i])){
//            collection.push(word[i])
//         } 
//     }
//     return collection;

//     ////o(2^m) + o(n) -- m: size of Regex, n size of string => O(2^m + n).
//     //var u = word.replace(/(.)(?=.*\1)/g, "");
//     //return u;
// }

// //o(n) - using Set and Math.max()
//     function lengthOfLongestSubstring(s){  
//         let set = new Set();
//         let left=0,right=0;
//         let longest=0;
//         while(right < s.length){
//             if(!set.has(s.charAt(right))){
//                 set.add(s.charAt(right))
//                 longest = Math.max(set.size,longest)
//                 right++;
//             }else{
//                 set.delete(s.charAt(left));
//                 left++;
//             }
//         }
//         return longest;
//     }

function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
       
    return s.split('').reduce((max, char, index) => {
       
        // we stored the last seen index of this character in 'map'
        const lastSeenIndex = map[char];
        // if the Left Side pointer of the window is at or before the previous appearance of this character, the window must contain this character.
        const windowContainsCharacter = lastSeenIndex >= left;
//      we'll move the Left Side pointer to exclude the previous appearance of the character, if necessary. 
        left = windowContainsCharacter ? lastSeenIndex + 1 : left;
        
//      store the last seen index of this character in 'map'   
        map[char] = index;
        
//      get the size of the window, accounting for 0-based indexing   
        const windowSize = index - left + 1;
//      return the biggest window size so far
        return Math.max(max, windowSize);
        
    }, 0);
}



var length = lengthOfLongestSubstring("abaaac");
console.log(length);