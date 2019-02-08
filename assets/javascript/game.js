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

function drawUnderscore(word) {
    var underscores = "";
    for (var i = 0; i < word.length; i++) {
        underscores += '_ ';
    }
    console.log(underscores.length);
    document.getElementById("word").textContent = underscores;
}

function checkWord(wordA, wordB) {
    var word = "";
    for (var i = 0; i < wordB.length; i++) {
        for (var j = 0; j < wordA.length; i++) {
            // store the correct word
            if (wordA[j] === wordB[i]) word = word + wordA[i];
        }
    }
    if (word === wordB) return true;
    return false;
}

drawUnderscore(computerGuess);

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var correctLetter = false;

    // Checks letter of user's guess to word in computer's mind
    for (var i = 0; i < computerGuess.length; i++) {
        if (userGuess === computerGuess[i]) {
            correctLetter = true;
            correctWord = correctWord + userGuess;
            break;
        } 
    }

    if (!correctLetter) {
        if (guesses.length > 0) {
            guesses += ', ';
        }
        guesses += userGuess;
        --tries;
    } 

    var triesText = document.getElementById("tries");
    triesText.textContent = tries;

    if (tries <= 0) {
        ++losses;
        guesses = "";
        userGuess = "";
        tries = 9;
        computerGuess = random(bands);
        drawUnderscore(computerGuess);
        triesText.textContent = tries;
    }

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    var userGuessesText = document.getElementById("guesses");
    userGuessesText.textContent = guesses;


};