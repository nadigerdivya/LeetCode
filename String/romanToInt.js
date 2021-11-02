////Given a roman numeral, convert it to an integer.
//o(n)
function romanToInt(s){
    let res = 0;
    let romanNumerals = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    for (let i = 0, l = s.length; i < s.length; i++) {
        const current = romanNumerals[s[i]];
        const next = romanNumerals[s[i + 1]];
        
        if (i < l - 1 && current < next) {
            res -= current;
        } else {
            res += current;
        }    
    }
    return res;
}


var value = romanToInt("IV");
console.log(value);