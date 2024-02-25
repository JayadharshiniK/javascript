console.log("Array");

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a:", a); // should print 10
console.log("b:", b); // should print 5

console.log("Check for palindrome");
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  console.log(isPalindrome("level")); // should print true
  console.log(isPalindrome("hello")); // should print false

console.log("FizzBuzz");
for (let i = 1; i <= 100; i++){
    if (i % 3 ===0 && i % 5===0) {
        console.log("FizzBuzz");
    } else if (i % 3 ===0 ){
        console.log("Fizz");
    }
    else if (i % 5 ===0 ){
        console.log("Bizz");
    }else {
        console.log(i);
    }
}

console.log("Prime Number Check");
function checkPrime (num){
    let i, flag = true;
    for (i = 2; i <= num -1; i++){
        if (num % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(76);
checkPrime(11);