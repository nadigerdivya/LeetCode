//Implement_strStr.js

//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//Clarification: return 0 when needle is an empty string. This is consistent to indexOf().


function findingNeedle(haystack, needle) {
    ////o(n*m) - n is string length, m is needle lenth
    // if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
    // if (haystack.length < needle.length) return -1;        // the other ones are for efficiency
    // let i = 0;

    // while(i < haystack.length){
    //     ////using built-in
    //     //if(haystack.substr(i , needle.length) == needle) return i; //o(m)
    //     //else i++;

    //     let substr = '';
    //     for(let j=0, h=i; j< needle.length; j++){
    //         substr = substr + haystack[h];
    //         h++;
    //     }
    //     if(substr == needle){
    //         return i;
    //     }
    //     else {
    //         i++; 
    //     }
    // }

    // return -1;
//---------------------------------------
//o(n) - n is the length of haystack
    //two base cases!!!
    if (needle.length === 0) return 0;
    
    if ( needle.length > haystack.length)  return -1;
    
    let startIndex = 0;
    let compareIndex = 0;
    while (startIndex < haystack.length && compareIndex < needle.length) { 
        // time complexity depends on the condition which runs more
        let char1 = haystack[startIndex + compareIndex]; //TRICKY
        let char2 = needle[compareIndex];

        if (char1 === char2) { 
            compareIndex++;
        }
        else {
            startIndex++;
            compareIndex = 0; //reset it
        }
    }
    
    return (compareIndex == needle.length) ? startIndex : -1
}; 


var strStr = findingNeedle("heloll", "ll");
console.log(strStr);