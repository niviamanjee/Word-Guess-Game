
/* Array with choices of 10 words */
var wordChoices = [
    "midnight", "paralyzed", "imagination", "creature", "fighting", "lurking", "neighborhood", 
    "terrorize", "corpse", "beast"]; 

var counterGuessesLeft = 8;
var lettersGuessed = [];
var targetWord = [];


/* Grabbing a random word and storing it in a variable*/
var randomWord = function(wordChoices) {
    return wordChoices[Math.floor(Math.random() * wordChoices.length)];
}