var bands = ["Blondie", "Prince", "Tavares", "Chic", "SuperMaxx"];

var wins = 0;
var losses = 0;
var tries = 9;
var guesses = "";
var startGame = false;

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

    if (!startGame) {
        var parent = document.getElementById("parent");
        var child = document.getElementById("initial-text");
        parent.removeChild(child);
        startGame = true;
        correctLetter = true;
        userGuess = "";
    }

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
        document.getElementById("image").src = "assets/images/" + computerGuess +  ".jpg";
        gameReset();
    }

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    var userGuessesText = document.getElementById("guesses");
    userGuessesText.textContent = guesses;


};