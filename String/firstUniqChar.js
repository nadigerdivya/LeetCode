////Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

//o(n)
function firstUniqChar(s){
    // let i = 0;
    // let visited = new Set();
    // while(i < s.length){
    //     var pattern = new RegExp(s[i], 'g');
    //     if(!visited.has(s[i])){
    //         let count = s.match(pattern).length
    //         if(count > 1){
    //             visited.add(s[i]);
    //             i++;
    //         }
    //         else
    //             return i; 
    //     } 
    //     i++;
    // }

    // return -1;

// o(n+n) = o(2n) = o(n)
    let map = {}
    
    for (let char of s) { //o(n)
        map[char] ? map[char]++ : map[char] = 1 // map keeps the all char and its count
    }
    
    for (let i = 0; i < s.length; i++) { //o(n)
        if (map[s[i]] === 1) return i
    }
        
    return -1

}

var result = firstUniqChar("abcabb");
console.log(result);
