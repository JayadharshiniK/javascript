let instagram = {
    user1: "id1",
    user2: "id2"
}

let i;

for (i=3; i<=10; i++) {
    let newUser = "user" + i;
    let newId = "id" + i;
    instagram[newUser] = newId;
}

console.log(instagram)