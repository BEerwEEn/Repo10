var lion = {

    name: "Simba",
    legs: 4,
    tails: 1

};

function myFunction(roar) {

    lion[roar] = "roar-roar";

    return lion;
    
}

console.log(myFunction("roar"));

myFunction(lion);
module.exports = myFunction;