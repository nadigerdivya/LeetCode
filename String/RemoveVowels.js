//Remove Vowels from a String
//o(1);
function removeVowels(input){
    let pattern = /[aeiou]/g;
    let result = input.replace(pattern, '');
    console.log(result);
}


removeVowels("divya");
