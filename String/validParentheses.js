////Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
////An input string is valid if:
////  1. Open brackets must be closed by the same type of brackets.
////  2. Open brackets must be closed in the correct order.
//// Ex : {[]} - Valid , ()[] - Valid {(}) - Not valid

//o(n) 
// function isValid(s) {
//     //if (s[0] == ")" || s[0] == "]" || s[0] == "}") return "INVALID";

//     let first = s[0]; let next = s[1]; let last = s[s.length - 1];

//     if (s.length == 2) first = "DEFAULT";

//     switch (first) {
//         case "(":
//             if (next == ")")
//                 return s.substr(2, s.length - 1);
//             else if (last == ")")
//                 return s.substr(1, s.length - 2);
//             else
//                 return "INVALID";
//         case "[":
//             if (next == "]")
//                 return s.substr(2, s.length - 1);
//             else if (last == "]")
//                 return s.substr(1, s.length - 2);
//             else
//                 return "INVALID";
//         case "{":
//             if (next == "}")
//                 return s.substr(2, s.length - 1);
//             else if (last == "}")
//                 return s.substr(1, s.length - 2);
//             else
//                 return "INVALID";
//         case "DEFAULT":
//             if (s[0] == "(" && s[1] == ")")
//                 return "VALID";
//             else if (s[0] == "[" && s[1] == "]")
//                 return "VALID";
//             else if (s[0] == "{" && s[1] == "}")
//                 return "VALID";
//             else
//                 return "INVALID";
//     }

//     return false;
// }

// function checkValid(s){
//     expression = isValid(s);
//     if (expression == "INVALID")
//         return false;
//     else if (expression == "VALID")
//         return true;
//     else 
//         return checkValid(expression);

   
// }

// function validParentheses(s) {
//     if (!s) return false;

//     let res = checkValid(s);
//     if(res == true) 
//         return true;
//     else 
//         return false;
// }



function validParentheses(s){
// //This regex will search if the string contains "{}" OR "()" OR "{}"
// const regex = /(\{\})|(\[\])|(\(\))/g;
	
// //Check if the string contains one of possible pairs
// while(s.match(regex)) {
//     // Replace all the pairs with an empty string
//     s = s.replace(regex, '');
// };

// //The if string is empty, then were only valid pairs, so it is true.
// //if the string contains data (like "{]") then there was an invalid pair, so it is false
// return s === ''; 

 
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
          stack.push(map[c])
        } else if (c !== stack.pop()) {
          return false;
        } 
    }
    
    return !stack.length;

}


var isValidParentheses = validParentheses("{[}]");
console.log(isValidParentheses);