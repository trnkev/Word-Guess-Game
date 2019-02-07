var bands = ["Blondie", "Prince", "Tavares", "Chic"];

var wins = 0;
var losses = 0;
var tries = 9;
var guesses = "";
var correctWord = "";

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var computerGuess = random(bands).toLowerCase();

function drawUnderscore(guess) {
    for (var i = 0; i < guess.length; i++) {
        correctWord += '_ ';
    }
    document.getElementById("word").textContent = correctWord;
}

drawUnderscore(computerGuess);

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var correctLetter = false;

    for (var i = 0; i < computerGuess.length; i++) {
        if (userGuess === computerGuess[i]) {
            correctLetter = true;
            break;
        } 
    }

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    var userGuessesText = document.getElementById("guesses");

    if (!correctLetter) {
        if (guesses.length > 0) {
            guesses += ', ';
        }
        guesses += userGuess;
        userGuessesText.textContent = guesses;
        --tries;
    }

    var triesText = document.getElementById("tries");
    triesText.textContent = tries;
};