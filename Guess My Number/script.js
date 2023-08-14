'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20
let highscore = 0;

const displayMessage = (message) => document.querySelector('.message').textContent = message;


document.querySelector('.check').addEventListener('click', ()=>{
    
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        displayMessage('No Number!');
    }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        displayMessage('🎉 Correct Number!');

        if(score>highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high!': 'Too low!');
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            displayMessage('you lost the game');
            document.querySelector('.score').textContent = 0
        }
    }else{
        displayMessage('you lost the game');
        document.querySelector('.score').textContent = 0;
    }
});

//coding challenge 1
document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = '';
})
//coding challenge 1