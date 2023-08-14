'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

let scores,currentScore,activePlayer, playing;

const init = ()=>{
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
   
   //initial view
   score0El.textContent = 0;
   score1El.textContent = 0;

   diceEL.classList.add('hidden');
   playerEl0.classList.remove('player--winner');
   playerEl1.classList.remove('player--winner');
   playerEl0.classList.add('player--active');
}

init();

const switchPlayer = ()=>{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

//rolling dice
btnRoll.addEventListener('click', ()=>{
    if(playing){
        //1. Generating a random dice roll
        const diceValue = Math.trunc(Math.random()*6)+1;
    
        //2. Display dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${diceValue}.png`;

        //3. Check for 1
        if(diceValue !== 1){
        //Add dice value to current score
            currentScore += diceValue;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        }
        else{
            //switch player
            switchPlayer();
        
        }
    }
   
})

btnHold.addEventListener('click',()=>{
    if(playing){
        //1. add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //check if player's score is >= 100
        if(scores[activePlayer] >= 100){
             playing = false;
             diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        //finish game
        //Switch to the next player
        switchPlayer();
    }
})

btnNew.addEventListener('click', init)