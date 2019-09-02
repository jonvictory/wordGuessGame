//elemetal variables

var directElemental = document.getElementById("directElemental");
var userElemental = document.getElementById("userElemental");
var winsElemental = document.getElementById("winsElemental");
lossElemental = document.getElementById("lossElemental");
playerGuessedGrab = document.getElementById("playerGuessed")
answerSpaceGrab = document.getElementById("playerGuessed")

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



playerGuessed = [];
var alpha = "abcdefghijklmnopqrstuvwxyz";
var answerSpace = alpha.split("");
answerSpaceGrab.textContent = answerSpace;

for (var m = 0; m < answerSpace.length; m++) {
    playerGuessed[m] = "_";
}




var remainder = werd.length;
var remainTest = document.getElementById("winsElemental")
remainTest.textContent = remainder + " fuck you"

var remainAttempts = werd.length * 2;
ansKeySel = document.getElementById("userElemental");
ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
remainderGrab = document.getElementById("remainder");
remainderGrab.textContent = remainAttempts + "Fuck";
//
//victory conditions
//

function victory(){
    if (remainder === 0) {
        alert("good job but the princess is in another castle");
    }
}

function input() {
    document.onkeyup = function (event) {
        var playerInput = event.key;
        playerGuess = playerInput.toLowerCase();
        directElemental.textContent = "Your Guess: " + playerGuess;
        var ansKeyCheck = ansKey.includes(playerGuess);
        var playerGuessedCheck = playerGuessed.includes(playerGuess);
        console.log(remainder);
        //
        //run event.key dependant functions
        //
        updateGuessed();
        werdCheckLoopPos();
        werdCheckLoopNeg();
        victory();
        //
        //define event.key dependant functions
        //
        function updateGuessed() {
            for (var k = 0; k < answerSpace.length; k++) {
                if (answerSpace[k] === playerGuess && playerGuessedCheck === false) {
                    playerGuessed[k] = playerGuess;
                    playerGuessedGrab.textContent = "Your Word: " + playerGuessed.join(" ");

                }
            }
        }

        function werdCheckLoopPos() {
            for (var j = 0; j < werd.length; j++) {

                if (werd[j] === playerGuess && ansKeyCheck === false) {
                    ansKey[j] = playerGuess;
                    remainder--;
                    ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
                    remainTest.textContent = remainder + " fuck you";
                }
            }
        }
         
        function werdCheckLoopNeg() {
            if (werd.indexOf(playerGuess) === -1 && ansKeyCheck === false && playerGuessedCheck === false) {
                remainAttempts--;
                remainderGrab.textContent = remainAttempts + "Fuck";
            }

        }
    }
}

input();

//playerinput




