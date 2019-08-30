//elemetal variables

var directElemental = document.getElementById("directElemental");
var userElemental = document.getElementById("userElemental");
var winsElemental = document.getElementById("winsElemental");
var lossElemental = document.getElementById("lossElemental");

//setting up words and word mechanics
var werds = [
    "snowcrash",
    "cyberspace",
    "shadowrun",
    "countzero",
    "wilson"
]

var werd = werds[Math.floor(Math.random() * werds.length)];

var ansKey = [];
for (var i = 0; i < werd.length; i++) {
    ansKey[i] = "_";
}

ansKeySel = document.getElementById("userElemental");

function WordGuess() {
    
    ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
    
}

WordGuess();

var remainder = werd.length;

//playerinput

document.onkeyup = function (event) {
    var playerGuess = event.key.toLowerCase;
    var playerGuess = event.key;
    directElemental.textContent = "Your Guess: " + playerGuess;

    for (var j = 0; j < werd.length; j++) {
        if (werd[j] === playerGuess) {
            ansKey[j] = playerGuess;
            remainder--;
            WordGuess();
        }
    }
}

    


