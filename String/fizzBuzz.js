//fizzBuzz.js

//Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if none of the above conditions are true.


//o(n)
function fizzBuzz(n){
    // let array = [];

    // for(let i = 1; i <= n; i++){
    //     if(i%3 == 0 && i%5 == 0)
    //         array.push('FizzBuzz')
    //     else if(i%3 == 0)
    //         array.push('Fizz')
    //     else if(i%5 == 0)
    //         array.push('Buzz');
    //     else
    //         array.push(i);
    // }

    // return array;

    //// using map
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);

}

var ouputArray = fizzBuzz(30);
console.log(ouputArray);

