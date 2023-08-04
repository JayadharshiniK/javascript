let alien = {
    name: "Navin", 
    tech: "JS",
}

console.log(alien['name']);

//COMPLEX OBJECTS:
let emply = {
    name: "Surya", 
    tech: "CSS",
    laptop: {
        cpu : 'i7',
        ram : 4,
        brand : "dell",
    }
}

for (let key in emply.laptop) {
    console.log(key);
}


// delete alien.laptop
// delete alien.tech

//The JavaScript for in statement loops through the properties of an Object;


// console.log(key, emply[key]);----for fetching key and its value;
// console.log(emply.laptop.brand?.length)  
//--find the length only if the brand? is available