////Write a function that reverses a string. The input string is given as an array of characters s.

//o(1)
// function reversedString(s){ // s is a string 
//     return s.split('').reverse().join('');
// }

//o(1)
function reversedString(s){ // s is an array 
    return s.reverse();
}



var reversedString = reversedString(["h","e","l","l","o"]);
console.log(reversedString);

