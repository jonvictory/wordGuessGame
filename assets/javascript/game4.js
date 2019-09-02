window.onload = function () {
    //elemetal variables

    directElemental = document.getElementById("directElemental");
    ansKeyEleGrab = document.getElementById("ansKeyEle");
    remainEleGrab = document.getElementById("remainEle");
    lossElemental = document.getElementById("lossElemental");
    playerGuessedGrab = document.getElementById("playerGuessed")
    //answerSpaceGrab = document.getElementById("answerSpace")

    var werds = [
        "snowcrash",
        "cyberspace",
        "shadowrun",
        "countzero",
        "wilson"
    ]
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var answerSpace = alpha.split("");
    var werd = werds[Math.floor(Math.random() * werds.length)];
    var remainder = werd.length;
    var remainAttempts = werd.length * Math.floor(1.5);
    
    //
    //Generates the answer space (possible characters) and the space where the guessed characters will populate on the page
    //
    

    GenPGuessedSpace(answerSpace);
    
    

    
    //
    //generates the space where the correct answers will populate on the page
    //

    
    var ansKey = GenAnsKeySpace(werd);

    //
    //remainder tracks the amount of correct guesses that are needed before the word is complete
    //

    
    
    remainEleGrab.textContent = remainder + " fuck you"

    

    


    function initialConditions() {
        remainAttGrab = document.getElementById("remainAtt");
        remainAttGrab.textContent = "System lockout in: " + remainAttempts + " attempts";

        playerGuessedGrab.textContent = "Your attempts: " + playerGuessed.join(" ");
        ansKeyEleGrab.textContent = "Key Decryptor: " + ansKey.join(" ");

    }

    function victoryConditions() {
        if (remainder === 0) {
            alert("good job but the princess is in another castle");
        }
    }

    function defeatConditions() {
        if (remainAttempts=== 0) {
            alert("You killed your decker. Good luck getting out of this one alive--you Wilson.")
        }
    }






    function input() {
        document.onkeyup = function (event) {
            var playerInput = event.key;
            playerGuess = playerInput.toLowerCase();
            directElemental.textContent = "Your Guess: " + playerGuess;
            var ansKeyCheck = ansKey.includes(playerGuess);
            var playerGuessedCheck = playerGuessed.includes(playerGuess);
            var ansSpaceCheck = answerSpace.includes(playerGuess);
            console.log(remainder);
            //
            //run event.key dependant functions
            //
            updateGuessed();
            werdCheckLoopPos();
            werdCheckLoopNeg();
            victoryConditions();
            defeatConditions();
            //
            //define event.key dependant functions
            //
            function updateGuessed() {
                for (var k = 0; k < answerSpace.length; k++) {
                    if (answerSpace[k] === playerGuess && playerGuessedCheck === false) {
                        playerGuessed[k] = playerGuess;
                        playerGuessedGrab.textContent = "Your Attempts: " + playerGuessed.join(" ");

                    }
                }
            }

            function werdCheckLoopPos() {
                for (var j = 0; j < werd.length; j++) {

                    if (werd[j] === playerGuess && ansKeyCheck === false) {
                        ansKey[j] = playerGuess;
                        remainder--;
                        ansKeyEleGrab.textContent = "Your Word: " + ansKey.join(" ");
                        remainEleGrab.textContent = remainder + " fuck you";
                    }
                }
            }

            function werdCheckLoopNeg() {
                if (werd.indexOf(playerGuess) === -1 && ansKeyCheck === false && playerGuessedCheck === false && ansSpaceCheck === true) {
                    remainAttempts--;
                    remainAttGrab.textContent = remainAttempts + "Fuck";
                }

            }
        }
    }
    initialConditions();
    input();
    
}


function GenAnsKeySpace(werd) {
    var ansKey = [];
    for (var i = 0; i < werd.length; i++) {
        ansKey[i] = "_";
    }
    return ansKey;
}

function GenPGuessedSpace(answerSpace) {
    playerGuessed = [];
    for (var m = 0; m < answerSpace.length; m++) {
        playerGuessed[m] = "_";
    }
}
    //playerinput




