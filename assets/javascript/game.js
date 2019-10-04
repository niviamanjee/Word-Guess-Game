
/* Array with choices of 10 movie names. */
var movieChoices = [
    "The Conjuring", "The Shining", "Poltergeist", "The Exorcist", "Annabelle", "Halloween", "Paranormal Activity",
    "Lights Out", "World War Z", "Chucky"];

var counterGuessesLeft = 8;
var lettersGuessed = [];
var selectedMovie = "";
var guessArray = [];

/* this function starts the game by doing the following actions: 
    A random movie name is chosen from the movieChoices array and stored in var targetMovie.
    The targetMovie variable string is split to and stored in var targetMovieArray.
    A for loop is used to go through each character of the targetMovie array and create another 
        array of underscores */
function startGame() {
    //get random number for array
    var targetMovieIndex = Math.floor(Math.random() * movieChoices.length);

    //places the value from the random number of the array in a variable 
    selectedMovie = movieChoices[targetMovieIndex];

    // var hiddenMovieArray = [];
    for (var i = 0; i < selectedMovie.length; i++) {

        guessArray[i] = "_";
        /* after the Movie name string is split, this for loop goes through the array of letters 
        and generates an array of underscores. Then is pushes those to the #random-movie <h2>. */
    }
    displayGuessArray();
}

function displayGuessArray() {

    //create a string to hold our characters
    var characters = "";
    for (var i = 0; i < guessArray.length; i++) {
        characters += guessArray[i] += " ";
    }
    $("#random-movie").text(characters);
}


function displayIncorrectArray(userGuess) {
    $("#letters-guessed").append(userGuess);
}


$(".reset-button").on("click", function () {
    startGame();
});

var isFirstGame = true;
/* when the user presses a key...*/
document.onkeyup = function (event) {
    console.log("test");


    if (isFirstGame) {
        startGame();
        isFirstGame = false;
    }
    else {
        var userGuess = event.key;

        for (var i = 0; i < selectedMovie.length; i++) {
            if (userGuess === selectedMovie[i]) {
                guessArray[i] = userGuess;
                displayGuessArray();
            }

            else {
                lettersGuessed.push(userGuess);
            }


        }

    }

}

