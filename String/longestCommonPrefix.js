//// Write a function to find the longest common prefix string amongst an array of strings.
//// If there is no common prefix, return an empty string "".
//o(n)
function longestCommonPrefix(sArray){
    let str = sArray[0];
    for(let i = str.length; i > 0; i--){
        let pre = str.slice(0,i);
        if(sArray.every( e => e.startsWith(pre))) 
            return pre;
    }
    return ""
}


var commonPrefix = longestCommonPrefix(["flower","flop","flow"]);
console.log(commonPrefix);
