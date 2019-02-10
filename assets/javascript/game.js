var bands = ["Blondie", "Prince", "Tavares", "Chic"];

var wins = 0;
var losses = 0;
var tries = 9;
var guesses = "";

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var computerGuess = random(bands).toLowerCase();

function drawUnderscore(word) {
     var underscores = [];
     var display = "";
    for (var i = 0; i < word.length; i++) {
        underscores.push("_");
        display += underscores[i] + " "
    }
    document.getElementById("word").textContent = display;
    return underscores;
}

function checkDone(array, word) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== word[i]) return false;
    }
    return true;
}

var secret = drawUnderscore(computerGuess);

function updateUnderscores(array) {
    var display = "";
    for (item of array) {
        display += item + " ";
    }
    document.getElementById("word").textContent = display;
}

function gameReset() {
    guesses = "";
    userGuess = "";
    tries = 9;
    computerGuess = random(bands).toLowerCase();
    secret = drawUnderscore(computerGuess);
    document.getElementById("tries").textContent = tries;
}

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var correctLetter = false;

    // Checks letter of user's guess to word in computer's mind
    for (var i = 0; i < computerGuess.length; i++) {
        if (userGuess === computerGuess[i]) {
            correctLetter = true;
            secret[i] = userGuess;
            updateUnderscores(secret);
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
        gameReset();
    }

    if (checkDone(secret,computerGuess)) {
        ++wins;
        gameReset();
    }

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    var userGuessesText = document.getElementById("guesses");
    userGuessesText.textContent = guesses;


};