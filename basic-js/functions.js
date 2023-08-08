function greet() {
    console.log("Hello World");
}
greet();

// returning a function
function wish() {
    return("Namaste!!");  //----to make something useful
}

let str = wish();
console.log(str);

//passing a function

function hello(user)
{
    return`Welcome ${user}!!`
}
let user = 'Kaaviya';
let st = hello(user);
console.log(st);

//function expression

//1:-
 let add = function(num1, num2) 
        {
            return num1 + num2;
        }

let result = add(5,6)

console.log(result);

//2:-

function greetuser() {

    let name = "Kavin";
    let msg = "Hello" + " " + name + " " + "start to learn javascript";

    console.log(msg)
}
greetuser()


//3:-
function greet(firstName, lastName){
    let mesg = "Hi!" + " " + firstName + " " + lastName + " " + "Happy learning!"
    console.log(mesg)
}
greet("Parveen", "Fathima")
greet("Nirupama", "Vijay")
greet("Vishali", "Iyer")
greet("Jennifer", "Mary")

//4:-
function sum (number1, number2){
    console.log(number1 + number2)
}
sum(45, 55)

//Parameter:- is the given in the definiton of function;
//Argument:- is given while calling a function; 
//Return:- Keyword used to return the value defined the function to whoever is calling this function;