//Given an array of strings operations containing a list of operations, 
//return the final value of X after performing all the operations. 
//Assumion ==> X = 0 and array includes only ++ , --

//o(n)
function performOerations(){
    let x = 0;
    let operationArray = ["X++", "++X", "X--"];

    var result = 0;
    for(let i = 0; i<operationArray.length; i++){
        if(operationArray[i].includes("++")) result = x++;
        else result = --x;
    }
    console.log(result);
}

performOerations();


