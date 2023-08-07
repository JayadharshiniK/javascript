let map = new Map();

map.set("Pradeep", "Java");
map.set("Kiran", "Android");
map.set("Nirupama", "AI");

// console.log(map.keys()); -- to obtain all the keys

// console.log(map.has("Chirag")); -- to check whether the declared key exists or not;

//  console.log(map.get("Nirupama")); -- to print a particular value;

//to print all the values of the map;
for(let [k,v] of map){
    console.log(k,":", v);
}

// for updating the given a value in a map
// altering the value in the map:- set new value with the same key
// map.set("Kiran", "Blockchain");