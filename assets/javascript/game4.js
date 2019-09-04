window.onload = function () {
    
    var winner = 0
    var loser = 0
    

    document.getElementById("blackout").addEventListener("click", function(){
        document.getElementById("blackout").style.zIndex = "-2";
        
      });

      var i = 0;
      var txt = 'W311, w311, w311... n!ce 2 533 e\^/e C0\^/*80y. R04L!! |O|z@R!!'
      var speed = 50;
      typeWriter();
      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("typeHere").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }


    
      container();
    function container() {
        input();
        

        guessEle = document.getElementById("guessEle");
        ansKeyEleGrab = document.getElementById("ansKeyEle");
        remainEleGrab = document.getElementById("remainEle");
        lossElemental = document.getElementById("lossElemental");
        playerGuessedGrab = document.getElementById("playerGuessed")
        remainAttGrab = document.getElementById("remainAtt");
        winGrab = document.getElementById("wins");
        loseGrab = document.getElementById("loss");


        
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
        // var ifWerdUsed = werdTest;
        // werdGenerator();
        // newWerdCheck()
        // toIfWerd();
        // function werdGenerator() {
        //     return 
        // }

        // function toIfWerd() {
        // ifWerdUsed.push(werd);
        // }
        
        // function newWerdCheck() {
        //     for (n = 0; n < werdTest.length; n++) {
        //         if (werdTest[n] === werd) {
        //             werdGenerator();
        //             toIfWerd();
                      


        //         }
        //     }
        // }
    
       
        //console.log(werdTest[n] === werd);   
        
        GenPGuessedSpace(answerSpace);

        //
        //generates the space where the correct answers will populate on the page
        //

        var ansKey = GenAnsKeySpace(werd);

        //
        //text statements
        //

        function textPGuessed(update) {
            playerGuessedGrab.textContent = "Your attempts: " + update;
        }
        function textCorrGuess(update) {
            ansKeyEleGrab.textContent = "Decrypt this pass-key: " + update;
        }

        function textRemAtt(update) {
            remainAttGrab.textContent = "System lockout in: " + update + " attempts";
        }

        function textWin(update) {
            winGrab.textContent = "Pass-keys decrypted: " + update;
        }

        function textLose(update) {
            loseGrab.textContent = "Bots alerted: " + update + " times";
        }
        //
        //conditions
        //

        //function initialConditions

        playerGuessedGrab.textContent = "Your attempts: " + playerGuessed.join(" ");
        ansKeyEleGrab.textContent = "Decrypt this pass-key: " + ansKey.join(" ");
        remainAttGrab.textContent = "System lockout in: " + remainAttempts + " attempts";
        remainEleGrab.textContent = "There are " + remainder + " remaining elements to decrypt";
        guessEle.textContent = "null";
        winGrab.textContent = "Pass-keys decrypted: " + winner;
        loseGrab.textContent = "Bots alerted: " + loser;
        
        //}
        console.log(winner)
        console.log(loser)
        function victoryConditions() {
            if (remainder < 1) {
                alert("good job but the princess is in another castle");
                textWin(winner++);
                reset()
                
                return true;
            }
            else {
                return false;
            }
        }

        function defeatConditions() {
            if (remainAttempts < 1) {
                alert("You killed your decker. Good luck getting out of this one alive--you Wilson.")
                textLose(loser++);
                reset()
                
                return true
            }
            else {
                return false;
            }
        }

        function reset() {
            container();
            
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
                    if (alphaCheck) {
                        guessEle.textContent = playerGuess;
                    }
                    else {
                        guessEle.textContent = "null";
                    }
                }

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
                            //ansKeyEleGrab.textContent = "Decrypt this pass-key: " + ansKey.join(" ");
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
    }

}








function typed() {
    return new Typed('#typed', {
        stringsElement: '#typed-strings'
    });
}

