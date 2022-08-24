let randomLoc = Math.floor(Math.random() * 5); //Generates a random number for ship location 
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;


let guess;
let hits = 0;
let guesses = 0;


let isSunk = false;

//Loop below is promptng human user to guess.

while (isSunk == false)  {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses +1;

        //Below is adding a hit detection code. 
        
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;

            //Below is letting user know they sunk a ship if they got the 3 hits

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else { //Letting user know they missed
            alert("MISS");
        }
    }
}

//Telling the user thier stats after sinking the ship
const stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);