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
    var underscores = "";
    for (var i = 0; i < guess.length; i++) {
        underscores += '_ ';
    }
    document.getElementById("word").textContent = underscores;
}

drawUnderscore(computerGuess);

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var correctLetter = false;

    // Checks letter of user's guess to word in computer's mind
    for (var i = 0; i < computerGuess.length; i++) {
        if (userGuess === computerGuess[i]) {
            correctLetter = true;
            break;
        } 
    }

    if (tries <= 0) {
        ++losses;
        guesses = "";
        userGuess = "";
        tries = 9;
        computerGuess = random(bands);
        drawUnderscore(computerGuess);
    }

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    if (!correctLetter) {
        if (guesses.length > 0) {
            guesses += ', ';
        }
        guesses += userGuess;
        --tries;
    } 

    var userGuessesText = document.getElementById("guesses");
    userGuessesText.textContent = guesses;

    var triesText = document.getElementById("tries");
    triesText.textContent = tries;
};