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

function input() {
    document.onkeyup = function (event) {
        var playerInput = event.key;
        playerGuess = playerInput.toLowerCase();
        directElemental.textContent = "Your Guess: " + playerGuess;
        //lossElemental.textContent = "Your Attempts: " + playerGuessed;
        //
        //run event.key dependant functions
        //

        //guessed();
        checkGuessed();
        werdCheckLoopPos();
        werdCheckLoopNeg();

        //
        //define event.key dependant functions
        //
        function checkGuessed() {
            for (var k = 0; k < answerSpace.length; k++) {
                if (answerSpace[k] === playerGuess && playerGuessed !== playerGuess) {
                    playerGuessed[k] = playerGuess;
                    playerGuessedGrab.textContent = "Your Word: " + playerGuessed.join(" ");
                    
                }
            }
        }
                
            
        
        // console.log(checkGuessed())
        //function guessed() {

        //     var keyPress;

        //     if (typeof event !== 'undefined') {
        //         keyPress = event.keyCode;
        //     }
        //     else if (e) {
        //         keyPress = e.which;

        //     }
        //     else if (checkedGuessed() === "skip") {
        //         keyPress = 0
        //     }
        //     playerGuessed.push(String.fromCharCode(keyPress));

        //     return false;

        // }
        
        


        function werdCheckLoopPos() {
            for (var j = 0; j < werd.length; j++) {

                if (werd[j] === playerGuess) {
                    ansKey[j] = playerGuess;
                    remainder--;
                    ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
                    remainTest.textContent = remainder + " fuck you";
                }
            }
        }
        //function 
        function werdCheckLoopNeg() {
            if (werd.indexOf(playerGuess) === -1) {
                remainAttempts--;
                remainderGrab.textContent = remainAttempts + "Fuck";
            }

        }
    }
}

input();

//playerinput




