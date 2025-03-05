
const result = document.getElementById('result');
const score = document.getElementById('score');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



function computerSelection() {
    const buttons = ['rock', 'paper', 'scissors'];
    return buttons[Math.floor(Math.random() * buttons.length)];
}

let playerChoice = ''

function playerSelection() {
    rock.addEventListener("click", () => {
        playerChoice = 'rock';
        game()
    })

    paper.addEventListener("click", () => {
        playerChoice = 'paper';
        game()
    })

    scissors.addEventListener("click", () => {
        playerChoice = 'scissors';
        game()
    })
}

let win = 0
let defeat = 0

function game() {
    if (playerChoice === '') { return };

    const computerChoice = computerSelection();


    if (playerChoice === computerSelection()) {
        result.style.color = 'white'
        result.textContent = 'Ничья';
    } else if (
        (playerChoice === 'rock' && computerSelection() === 'scissors') ||
        (playerChoice === 'paper' && computerSelection() === 'rock') ||
        (playerChoice === 'scissors' && computerSelection() === 'paper')
    ) {
        result.style.color = 'green'
        result.textContent = 'Победа';
        win+=1
    } else {
        result.style.color = 'red'
        result.textContent = 'Поражение';
        defeat+=1
    }
    score.textContent  = `${win} : ${defeat}`
    if (win === 5){
        result.textContent = 'Вы победили в этой игре!!!';
        setTimeout(resetGame, 1500);
    }else if(defeat === 5){ 
        result.textContent = 'Вы проиграли в этой игре!!!';
        setTimeout(resetGame, 1500);
    }
}

function resetGame() {
    win = 0;
    defeat = 0;
    score.textContent = `${win} : ${defeat}`;
    result.style.color = 'white'
    result.textContent = 'Начнём заново';
}


playerSelection()