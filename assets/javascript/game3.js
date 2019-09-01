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
var answer = []
for (var i = 0; i < werd.length; i++) {
    ansKey[i] = "_";
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
        var playerGuessed = []
        guessed();
        lossElemental.textContent = playerGuessed + "ASSHAT";

        function guessed() {
            var keyPress;
            if (typeof event !== 'undefined') {
                keyPress = event.keyCode + ",";
              }
              else if (e) {
                keyPress = e.which;
              }
            
              playerGuessed.push(String.fromCharCode(keyPress));
            
              return false;   // Prevents the default action
            };
        

        directElemental.textContent = "Your Guess: " + playerGuess;
        
        for (var j = 0; j < werd.length; j++) {

            if (werd[j] === playerGuess) {
                werdUpdate();
                }  
        }
        function werdUpdate() {
            ansKey[j] = playerGuess;
            remainder--;
            ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
            remainTest.textContent = remainder + " fuck you"
        }
        // }
        //function attemptUpdate() {
           // remainAttempts--;
           // remainderGrab.textContent = remainAttempts + "Fuck";

        //}
        // else if (answer.findIndex(playerGross) === -1) {
                //     remainAttempts--;
                //     remainderGrab.textContent = remainAttempts + "Fuck";
                // }
    }
}

    input();

//playerinput




