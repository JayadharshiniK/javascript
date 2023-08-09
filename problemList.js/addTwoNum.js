let list1 = [7,9,4];

let list2 = [8,0,1];

//"Reversed list"
// console.log(list1.reverse());
// console.log(list2.reverse());

let newlist1 = list1.reverse();
let newlist2 = list2.reverse();

//"Converting reversed array as an value and storing it as a string"
let numl1 = newlist1.join('');
// console.log(numl1);
let intnum1 = parseInt(numl1);

let numl2 = newlist2.join('');
// console.log(numl2);
let intnum2 = parseInt(numl2);

//"Adding the numbers"
let sum = intnum1 + intnum2;
// console.log(sum);


//"Coverting number to string"
const numToSeparate = sum;
const resultArray = Array.from(String(numToSeparate), Number);
// console.log(resultArray);  

//"Reversing the result array"
console.log(resultArray.reverse());

//Expected output: [5,0,6]

