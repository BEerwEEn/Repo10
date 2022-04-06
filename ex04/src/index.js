var players = {

    7: "Muhames Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"

};


function myFunction(myObj) {

    var playNumber = 10;
    var player = myObj[playNumber];

    return player;
        
}


console.log(myFunction(players))
module.exports = { players, myFunction };