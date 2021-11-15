//// Write a function to find the longest common prefix string amongst an array of strings.
//// If there is no common prefix, return an empty string "".
//o(n)
function longestCommonPrefix(sArray){
    ////using sArray.every()
    // let str = sArray[0];
    // for(let i = str.length; i > 0; i--){
    //     let pre = str.slice(0,i);
    //     if(sArray.every( e => e.startsWith(pre))) 
    //         return pre;
    // }
    // return ""


   //  Sort the strings. When an array of different strings are sorted, they will be sorted alphabetically, which means all 
   // we left to do is find the common part between the first and the last values in the sorted array. As simple as this:
   sArray.sort();
  for (let i = 0; i < sArray[0].length; i++) {
    if (sArray[0][i] !== sArray[sArray.length - 1][i]) return sArray[0].substr(0, i);
  }
  return sArray[0];
}


var commonPrefix = longestCommonPrefix(["flower","flop","flow"]);
console.log(commonPrefix);
