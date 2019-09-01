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
//test
// var check = ["c", "h", "e", "k"]
// var test = ["l"]
// function testy(){
//     return "l";
// }
// console.log(testy())
// function testcheck(){
//     console.log(check.findIndex(testy))
// }
// testcheck()


//test
 
var werd = werds[Math.floor(Math.random() * werds.length)];
var ansKey = [];
for (var i = 0; i < werd.length; i++) {
    ansKey[i] = "_";

}

var playerGuessed = []
lossElemental.textContent = playerGuessed + "ASSHAT";
var remainder = werd.length;
var remainTest = document.getElementById("winsElemental")
remainTest.textContent = remainder + " fuck you"

var remainAttempts = werd.length * 2;
ansKeySel = document.getElementById("userElemental");
ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
remainderGrab = document.getElementById("remainder");
remainderGrab.textContent = remainAttempts + "Fuck";

splizit();
function splizit() {
    var splitter = werd.split("");
    return splitter;
}
var werdWerd = splizit();

function input() {
    document.onkeyup = function (event) {
        var playerInput = event.key;
        playerGuess = playerInput.toLowerCase();
        directElemental.textContent = "Your Guess: " + playerGuess;
        //
        //run event.key dependant functions
        //
        guessed();
        werdCheckLoopPos();
        werdCheckLoopNeg();

        //
        //define event.key dependant functions
        //
        function dummyPlayerGuess() {
            return playerGuess;
            
            
        }
        function guessed() {
            var keyPress;
            if (typeof event !== 'undefined') {
                keyPress = event.keyCode;
            }
            else if (e) {
                keyPress = e.which;
            }

            playerGuessed.push(String.fromCharCode(keyPress));

            return false;
        };
        

        function werdCheckLoopPos() {
            for (var j = 0; j < werd.length; j++) {

                if (werd[j] === playerGuess) {
                    ansKey[j] = playerGuess;
                    remainder--;
                    ansKeySel.textContent = "Your Word: " + ansKey.join(" ");
                    remainTest.textContent = remainder + " fuck you";
                }
            }
        };

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




