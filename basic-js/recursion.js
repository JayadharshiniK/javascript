function show(){
    console.log("Hi");
}

show();           //--calling a function  

//stack: --- first the log fn will get executed and then the show () here
//stack: --- abc => show() => log()
// recursion -> if the function gets called by itself(name;) then, the output will be of a large size;
// But it get ends by the statement : "Maximum call stack exceeded" 

//FACTORIAL USING RECURSION:

function fact(n){

    if(n==0)
    return 1;

    else
    return n* fact(n-1);
}

let num = 5;
let result = fact(num);

console.log(result);

