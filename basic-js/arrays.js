let values = [];

values.push(5)
values.push(6)
values.push(7)

console.log(values[0]);   //--the value is the position for the values assigned

//adding the value to the array:

let names = ['Navin', 'Kiran', 'Che'];
names[3] = 'Jerome';

console.log(names);



//Mixed array:
let data = [
    'Nianika', 25, {tech:'JS'}, 
    function(){console.log ("Hello World");}
]
console.log(data);

data[3]();


//array methods:

//1: PUSH METHOD:

let info = [5,7,8,9];
console.log(info.push(2));

console.log(info);  //--this gives the output as 5 (the length of array and the added value for the array;)

//2. POP--(stack) METHOD:
let num = [5,7,8,9];
console.log(num.push(2));
console.log(num.pop());   //--this pushes the out the recent last added to the the array; 

console.log(num); 


//3. SHIFT METHOD: //pushing the array to the left hand side (queue; first in & first out)
let shift = [5,6,3,4];
console.log(shift.shift());
console.log(shift.unshift(2));

console.log(shift);


//4. SPLICE METHOD: //breaking down into two parts:

let list = [1,2,3,4,5,6]
console.log(list.splice(4,1, 11));      //4= Index number;  1= No.of values you want to remove;  11=Is the number inserted in the palce of deleted;

console.log(list);

//5. forEach():- which will give you one by one value;

let number = [42,67,89,69,40,45,26];

number.forEach(n => {
console.log(n);
});
console.log(number);


//FOR-OF LOOPS IN ARRAY:

let nums = [];
 nums[0] = 5;
 nums[99] = 9;

 for(let n of nums){
    console.log(n);
 }

//  for(let key in nums){
//     console.log(nums[key]);
//  }


//ARRAY DESTRUCTURING:

let numb = [5,8,9,3]
//  console.log(numb);
 let [a,b,c,d] = numb;    //--for getting a separate value from the array

 console.log(d);


//swapping the postion of variables in the array;
let x = 5;
let y = 6;

[a,b] = [b,a]

console.log(a,b);

//ARRAY OF STRING: --Split method

let words = "My name is Keerthi suresh, actress".split(' ');

//three dots here covers all the rest of the elements

let [l,m,, ...n] = words

console.log(n);

// console.log(m,n); -- for assigning variable for the individual variable

