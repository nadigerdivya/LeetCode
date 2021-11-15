////Write a function that reverses a string. The input string is given as an array of characters s.

//Using built-in
//o(n)
// function reversedString(s){ // s is a string 
//     return s.split('').reverse().join('');
// }

//o(1)
// function reversedString(s){ // s is an array 
//     return s.reverse();
// }

//o(n/2) = o(n) and s(n) - for input and i
function reversedString(s){ // s is an array 
    // let reversedStr = [];

    // for(let i=s.length -1 ; i >= 0 ; i--){
    //     reversedStr.push(s[i]);
    // }

    // return reversedStr;

    for (let i=0; i<s.length/2; i++)
        [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]

    return s;
}


var reversedString = reversedString(["h","e","l","l","o"]);
console.log(reversedString);

