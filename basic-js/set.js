let nums = new Set();

nums.add(3);
nums.add(4);
nums.add(4);    //--no effect on the output, as this value is not unique;
nums.add("Mohan");
nums.add("Nitish");

// nums.forEach(value => {
//     console.log(value);    //for printing them line by line
// })

console.log(nums.has("mohan"));
