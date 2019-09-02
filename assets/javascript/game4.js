window.onload = function () {
    //elemetal variables

    guessEle = document.getElementById("guessEle");
    ansKeyEleGrab = document.getElementById("ansKeyEle");
    remainEleGrab = document.getElementById("remainEle");
    lossElemental = document.getElementById("lossElemental");
    playerGuessedGrab = document.getElementById("playerGuessed")
    remainAttGrab = document.getElementById("remainAtt");
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

    
    
    

    //
    //text statements
    //

    function textPGuessed(update) { 
        playerGuessedGrab.textContent = "Your attempts: " + update;
    }
    function textCorrGuess(update) {
        ansKeyEleGrab.textContent = "Key Decryptor: " + update;
    }

    function textRemAtt(update) {
        remainAttGrab.textContent = "System lockout in: " + update + " attempts";
    }


    //
    //conditions
    //

    function initialConditions() {
        
        playerGuessedGrab.textContent = "Your attempts: ";
        ansKeyEleGrab.textContent = "Key Decryptor: " + ansKey.join(" ");
        remainAttGrab.textContent = "System lockout in: " + remainAttempts + " attempts";
        remainEleGrab.textContent = "There are " + remainder + " remaining elements to decrypt";
        //guessEle.textContent = "X";

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


    //
    //onkey
    //

    function input() {
        document.onkeyup = function (event) {
            var playerInput = event.key;
            playerGuess = playerInput.toLowerCase();
            var alphaCheck = alpha.includes(playerGuess)
            var ansKeyCheck = ansKey.includes(playerGuess);
            var playerGuessedCheck = playerGuessed.includes(playerGuess);
            var ansSpaceCheck = answerSpace.includes(playerGuess);
        
            //
            //run event.key dependant functions
            //
            
            updateGuessed();
            currSelDisp();
            werdCheckLoopPos();
            werdCheckLoopNeg();
            victoryConditions();
            defeatConditions();
            //
            //define event.key dependant functions
            //

            function currSelDisp() {
                if (alphaCheck){
                guessEle.textContent = playerGuess;
            }
            else {
                guessEle.textContent = "X";
            }
        }
        console.log(playerGuess && playerGuessedCheck)
            function updateGuessed() {
                for (var k = 0; k < answerSpace.length; k++) {
                    if (answerSpace[k] === playerGuess && playerGuessedCheck === false) {
                        playerGuessed[k] = playerGuess;
                        textPGuessed(playerGuessed.join(" "));
                        //playerGuessedGrab.textContent = "Your attempts: " + playerGuessed.join(" ");

                    }
                }
            }

            function werdCheckLoopPos() {
                for (var j = 0; j < werd.length; j++) {

                    if (werd[j] === playerGuess && ansKeyCheck === false) {
                        ansKey[j] = playerGuess;
                        remainder--;
                        textCorrGuess(ansKey.join(" "));
                        //ansKeyEleGrab.textContent = "Key Decryptor: " + ansKey.join(" ");
                        remainEleGrab.textContent = "There are " + remainder + " remaining elements to decrypt"
                    }
                }
            }

            function werdCheckLoopNeg() {
                if (werd.indexOf(playerGuess) === -1 && ansKeyCheck === false && playerGuessedCheck === false && ansSpaceCheck === true) {
                    remainAttempts--;
                    textRemAtt(remainAttempts);
                    //remainAttGrab.textContent = "System lockout in: " + remainAttempts + " attempts";
                }

            }
        }
    }
    input();
    initialConditions();
    
    
}








