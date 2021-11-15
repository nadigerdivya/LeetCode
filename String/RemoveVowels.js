//Remove Vowels from a String
//o(n);
function removeVowels(input){
    // let pattern = /[aeiou]/g;
    // let result = input.replace(pattern, '');
    // console.log(result);

    let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    for(let i =0; i<input.length; i++){
        if(vowelsSet.has(input[i]))
            input = input.replace(input[i], '');
    }
    return input;
}


console.log(removeVowels("divya"));
