let greet = (user) => {
    console.log("hello " + user);
    return 1;
}

console.log(greet("Premanandh"));

let laptop = {
    cpu: "i9",
    ram: 16,
    brand: 'HP',

    getConfig: function() {
        console.log(this.cpu);    //----this means defining the current function:
    }
}
laptop.getConfig();

//Constructor function:

function alien1(name, tech) {

}

let alien1 = new Alien("NAVIN", "JS")   //"new" keyword creates a new object for us