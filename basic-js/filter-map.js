// let nums = [4,5,6,7,8,9,32]
//  nums.forEach((n, i , nums) => {     //i= index number
//     console.log(n, i, nums);
//  })


//filtering values & reduce method: 
let list = [76,87,95,45,36,32];

list.filter(n => n%2===0)
    .map ( n => n*2)
    .forEach( n => {
    console.log(n);
});


let numb = [76,87,95,45,36,32];

let result = numb.filter(n => n%2===0)
    .map ( n => n*2)
    .reduce((a,b) => a+b);
console.log(result);
