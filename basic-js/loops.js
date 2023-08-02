//for loop

// for(initialExpression; condition; step) {
//     console.log
// }

for(let i = 1; i <= 50; i++) {

    if (i % 2 !==0) {
        console.log("odd number" + i);
    }
   
}

for(let i = 10; i >= 1; i--) {

    if (i % 2 == 0) {
        console.log("even number #" + i);
    }
}

//while loop
let x = 10;

while(x>=1) {
    console.log("Hello", x);
    x--;
}

console.log(x);   //----it will be  0, the output is 

//do-while loop
 let i = 9;

 do {
    console.log("hello", i);
    i++;
 } while(i<=5)


//nested loop
for (let i=1;i<=5;i++)
{
    console.log("hi", i);

    for(let j=1;j<=5;j++)
    console.log("hello", j);
}

//Loops use cases:

//1:-
for(let i=1;i<=100;i++) {
    if (i % 3 == 0) {
        console.log(i, "Multiple of 3");
    }
}

//2:-
let num = 5467497
let num2 = 0

while(num>0) {
    console.log(num%10)
    num = parseInt(num / 10);
}
