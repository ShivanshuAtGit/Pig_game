/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScores, activePlayer , stateVar ;

init();

document.querySelector('.btn-roll').addEventListener('click' , function(){

   if (stateVar){
        //genrate a random number
    var dice = Math.floor(Math.random() * 6 + 1);

    //display the result
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';


    // if it is not a one
      if(dice!==1){
        roundScores += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScores;
      }

      else{
         // if it is a one
      nextPlayer();
      }

   }
    
});


document.querySelector('.btn-hold').addEventListener('click' , function(){
    
  if(stateVar){

     // add the number to main score
    scores[activePlayer] += roundScores;

    // update the Ui
    document.getElementById('score-' + activePlayer ).textContent = scores[activePlayer];

     // if the player wins
     if(scores[activePlayer]>=100){

      stateVar = false;
      document.getElementById('name-' + activePlayer).textContent= 'Winner!!!';

      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  
     }

     else{
       // change player
     nextPlayer();
     }
    
  }
     
});

document.querySelector('.btn-new').addEventListener('click' , init);

function init(){

  stateVar= true;
  scores = [0,0];
roundScores = 0;
activePlayer = 0;

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.dice').style.display='none';

// remove and add classes

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

document.getElementById('name-0').textContent= 'Player 1';
document.getElementById('name-1').textContent= 'Player 2';
}


function nextPlayer(){

  document.getElementById('current-' + activePlayer).textContent = '0';
  activePlayer === 0 ? activePlayer=1 :activePlayer=0 ; 

  roundScores = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}