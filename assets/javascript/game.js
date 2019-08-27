//elemetal variables

var directElemental = document.getElementById("directElemental");
var userElemental = document.getElementById("userElemental");
//maybe use this later var computerElemental = document.getElementById("computerElemental");
var winsElemental = document.getElementById("winsElemental");
var lossElemental = document.getElementById("lossElemental");
//maybe use later var tiesElemental = document.getElementById("tieElemtnal");

//setting up words and word mechanics
var werds = [
    "snowcrash",
    "cyberspace",
    "shadowrun",
    "countzero",
    "wilson"
]

var werdMath = werds[Math.floor(Math.random() * werds.length)];

var ansKey = [];
for (var i = 0; i < word.length; i++) {
    ansKey[i] = "_";
}



var letters = word.length;

//playerinput

var playerGuess = event.key.toLowerCase;

document.onkeyup = function (event) {
    var playerGuess = event.key;
}

if (playerGuess === null) {
    break;
} else if (playerGuess.length !== 1) {
    alert("Don't be a Wilson. You know damn well this terminal only receives single inputs.");
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === playerGuess) {
            ansKey[j] = playerGuess;
            remainingLetters--;
        }
    }
}
