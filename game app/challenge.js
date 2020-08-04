// ! coding starts here  and main variables also here

let scores, roundScores, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (gamePlaying) {
        // todo: 1. random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // todo: 2. Display the result
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "img/dice-" + dice + ".png";
    
        // todo: 3. Update the round score if the rolled number was not a 1
    
        if(dice !== 1) {
            // todo: Add score
               roundScores += dice;
               document.querySelector("#current-" + activePlayer).textContent = roundScores;
        } else {
            // todo: Next player
               nextPlayer();
        }
    }
});

// ! Buttn Hold starts here 
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlaying) {

        // todo 1: Add current score to global score 

            scores[activePlayer] += roundScores;

       // todo 2: Update the UI

          document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer]; 

       // todo 3: check if player won the game 

          if (scores[activePlayer] >= 20) {
              
              document.querySelector("#name-" + activePlayer).textContent = "Winner!";
              document.querySelector(".dice").style.display = "none";
               document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
               document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
               gamePlaying = false;

          } else {

              // ! Next player turn
                 nextPlayer();
          }
    }


});

function nextPlayer() {  
    // ! Next player turn
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

// ! Buttn for New Game starts here 

document.querySelector(".btn-new").addEventListener("click", init );

function init() { 
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
 }