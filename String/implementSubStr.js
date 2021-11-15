//implementSubStr.js

//implementing string substr() method. The substr() method extracts parts of a string, beginning at a specified position, and returns a specified number of characters.
// subStr(start) - returns substring starting from mentioned postion to end. If start is greater than the length of the string, substr() returns an empty string. If start is negative, substr() counts from the end of the string. 
// subStr(start, length) - returns substring starting from start postion to the length.

//o(n)
function subStr(string, start, length){
    let result = '';
    if(typeof length !== "undefined"){
    let i = start;
        for(let j = 0; j <=length - 1 ; j++){
            result = result + string[i];
            i++;
        }
    }
    else{
        for(let i = start; i < string.length; i++){
            result = result + string[i];
        }
    }
    return result;
}


//var substr = subStr(string = 'hello', start = 2);
var substr = subStr(string = 'hello', start = 2, length = 2);
console.log(substr);



//Javascript Function overloading
//---------------------------------------
//There is no real function overloading in JavaScript since it allows to pass any number of parameters of any type.
//There are two ways to approach this better:
// 1.Pass a dictionary (associative array) for lot of flexibility
// 2.Take an object as the argument and use prototype based inheritance to add flexibility.

