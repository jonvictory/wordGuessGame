//setting up words and word mechanics
var werds = [
    "snowcrash",
    "cyberspace",
    "shadowrun",
    "countzero",
    "wilson"
]

var werdMath = werds[Math.floor(Math.random()*werds.length)];

var ansKey = [];
for  (var i = 0; i < word.length; i++) {
    ansKey[i] ="_";
}



var letters = word.length;

//playerinput

var playerGuess = event.key;

document.onkeyup = function(event) {
    var playerGuess = event.key;
}