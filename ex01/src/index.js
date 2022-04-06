var myPet = { 

    species: "Dodg",
    name: "Pujdo",
    legs: 4,
    friends: ["Garo", "Zvaljo"] 

};

function myFunction(myObj) {

    return myObj;
}

console.log(myFunction(myPet));
module.exports = {myPet, myFunction}