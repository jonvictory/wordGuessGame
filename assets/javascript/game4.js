window.onload = function () {
    
    var winner = 0
    var loser = 0
    

    document.getElementById("blackout").addEventListener("click", function(){
        document.getElementById("blackout").style.zIndex = "-2";
        
      });

      var i = 0;
      var txt = 'W311, w311, w311... n!ce 2 533 eWe C0W*80y. R04L!! |O|z@R!! _\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/__\```|_{o}|_------C|_!c|< NeW@rez 2 5t@Rt------- |_[]|_``/_'
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
        hintGrab = document.getElementById("hint");

        var snowcrash = {
            name: "snowcrash",
            hint: "Is it a computer malfuction characterized by a fuzzy-looking screen, a drug, or a novel? Perhaps you can try Uncle Enzo for a life line"
        }
        var cyberspace = {
            name: "cyberspace",
            hint: "After Al Gore pointed out that his dad '. . .invented the internet. . .' during a presidential debate--as a sad aggression tactic against an opponent that barely had the mental acuity of a 4 year old--the use of this once common name for that paternal invention was already in decline."
        }

        var shadowrun = {
            name: "shadowrun",
            hint: "Whether you believe in the fatalist stories that spew forth from the dregs of society, and you can look past their unhealthy obsessions with the dealings of the FASA Corporation, it's far fetched to believe that there are people running the streets at night when Renraku Arts Corporate Security teams are prowling around with HV submachine guns."

        }

        var countzero = {
        name: "countzero",
        hint: "Everyone back in the sprawl knows about the Neuromancer, and a few can probably recall what happened to Mona Lisa, but there was this one kid that nobody really remembers because he started out as a real Wilson."
        }

        var wilson = {
            name: "wilson",
            hint: "It's really funny how a guy The Finn knew ended up being synonomous with really botching a decker job. The Finn still blows a blood vessel when someone brings it up. I guess they used to be friends, or something."
        }

        var werds = [
            snowcrash.name,
            cyberspace.name,
            shadowrun.name,
            countzero.name,
            wilson.name
        ]

        var alpha = "abcdefghijklmnopqrstuvwxyz";
        var answerSpace = alpha.split("");
        var werd = werds[Math.floor(Math.random() * werds.length)];
        var hint = werd;
        var remainder = werd.length;
        var remainAttempts = Math.round(1.5*werd.length);

        
        
        
        

        

            
        
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
                alert("Great Job, but unfortunately--my deck-jockey friend--the princess is in another castle. PLAY AGAIN! |_[o]|_zzzzzzzzzz");
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
                alert("I know what you're thinking: is it going to kick the juice now? Does it feel like your data-jack is heating up? It could be... but if you start working on another pass-key maybe I'll think about letting you live a little longer.")
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
        console.log(wilson.hint)
        

        //
        //onkey
        //
        // console.log(document.getElementById("hintButt").addEventListener("click", function(){}))
        //     document.getElementById("hintButt").addEventListener("click", function(){

        //         if (werd === "snowcrash") {
        //         hintGrab.innerHTML = snowcrash.hint;
        //         }
        //         else if (werd === "cyberspace") {
        //             hintGrab.innerHTML = cyberspace.hint;
        //         }
        //         else if (werd === "shadowrun") {
        //             hintGrab.innerHTML = shadowrun.hint;
        //         }
        //         else if (werd === "contzero") {
        //             hintGrab.innerHTML = countzero.hint;
        //         }
        //         else if (werd === "wilson") {
        //             hintGrab.innerHTML = wilson.hint;
        //         }
        //       });
        
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

