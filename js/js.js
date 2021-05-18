var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location + 1;
var location3 = location2 + 2;
var location1 = 3;
var location2 = 4;
var location3 = 5;
var quess;
var hits = 0;
var quesses = 0;
var isSunk = false;

while (isSunk == false) {
    quesses = prompt("Ready, aim, fire! (enter a number from 0-6:");
    if (quess < 0 || quess > 6) {
        alert("plase enter a valid cell number!");
    }else {
        quesses = quesses + 1;

        if (quess == location1 || quess == location2 || quess == locaqtion3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSumk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}
var stats = "You took " + quesses + "quesses to sink the battlship, " + "which means your shooting accouracy was " + (3/quesses);
alert(start);