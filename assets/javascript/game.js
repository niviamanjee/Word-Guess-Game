
/* Array with choices of 10 movie names. */
var movieChoices = [
    "the conjuring", "the shining", "poltergeist", "the exorcist", "annabelle", "halloween", "paranormal Activity",
    "lights out", "world war z", "chucky"];

var counterGuessesLeft = 10;
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

/* this function compared the key pressed to the letters in the already guessed array*/
function displayLettersGuessedArray() {
    var userGuess = event.key;
    console.log(userGuess);
    var letterIsDuplicated = false;
    for (var i = 0; i < lettersGuessed.length; i++) {
        console.log(lettersGuessed[i]);
        if (userGuess === lettersGuessed[i]) {
            console.log(lettersGuessed[i]);
            /* display: "you already guessed that letter!" */
            letterIsDuplicated = true;
            $("#message").text("You already guessed this letter!");
        }
    }
    lettersGuessed.push(userGuess);
    if (letterIsDuplicated === false) {
        console.log("it's working!");
        $("#letters-guessed").append(userGuess + " ,");
    }


}

function counterGuesses(i) {
    var userGuess = event.key;
    $("#guesses-remaining").text("Guesses Remaining: 8");
    if (userGuess === selectedMovie[i]) {
        counterGuessesLeft--;
        console.log(counterGuessesLeft);
        $("#guesses-remaining").text("Guesses Remaining: " + counterGuessesLeft);
    }
    else if (userGuess != lettersGuessed[i]) {
        counterGuessesLeft--;
        $("#guesses-remaining").text("Guesses Remaining: " + counterGuessesLeft);

    }
    else {
        /* display: "you already guessed that letter!" */
    }
}


$(".reset-button").on("click", startGame);


var isFirstGame = true;
/* when the user presses a key...*/
document.onkeyup = function (event) {



    if (isFirstGame) {
        startGame();
        console.log(selectedMovie);
        isFirstGame = false;

    }
    else {
        var userGuess = event.key;


        var guessedCorrectly = false

        for (var i = 0; i < selectedMovie.length; i++) {
            if (userGuess === selectedMovie[i]) {
                guessedCorrectly = true;
                guessArray[i] = userGuess;
                displayGuessArray();
                counterGuesses(i);
            }

        }
        console.log(guessedCorrectly)
        if (guessedCorrectly === false) {
            displayLettersGuessedArray();
            counterGuesses();
        }

    }

}

