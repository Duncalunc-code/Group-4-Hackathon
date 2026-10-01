// Rock paper scissors game logic

const buttons = document.querySelectorAll(".buttons button");
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('Button clicked:', button.dataset.choice);

        playerChoice.textContent = button.dataset.choice;

        const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoice.textContent = computerRandomChoice;
        
        if (button.dataset.choice === computerRandomChoice) {
            console.log('Tie!');
        } 
        else if (
        (button.dataset.choice === 'rock' && computerRandomChoice === 'scissors') ||
        (button.dataset.choice === 'paper' && computerRandomChoice === 'rock') ||
        (button.dataset.choice === 'scissors' && computerRandomChoice === 'paper')
        ) {
            console.log('Player wins!');
            playerScore++;
            document.querySelector('#player-score').textContent = playerScore;
        } 
        else {
            console.log('Computer wins!');
            computerScore++;
            document.querySelector('#computer-score').textContent = computerScore;
        }

        if (playerScore === 3) {
            alert('Player wins the game!');
            playerScore = 0;
            computerScore = 0;
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
        }
        if (computerScore === 3) {
            alert('Computer wins the game!');
            playerScore = 0;
            computerScore = 0;
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
        }
    });
});