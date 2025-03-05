
const result = document.getElementById('result');
const score = document.getElementById('score');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



function computerSelection() {
    const buttons = ['rock', 'paper', 'scissors']
    const computerSelections = Math.floor(Math.random() * buttons.length);


    if (computerSelections === 1) {
        console.log(buttons[0])
    } else if (computerSelections === 2) {
        console.log(buttons[1])
    } else {
        console.log(buttons[2])
    }
}


let rockButtonClicked = false;
let paperButtonClicked = false;
let scissorsButtonClicked = false;

function playerSelection() {
    rock.addEventListener("click", () => {
        rockButtonClicked = true;
    })

    paper.addEventListener("click", () => {
        paperButtonClicked = true;
    })

    scissors.addEventListener("click", () => {
        scissorsButtonClicked = true;
    })
}


function game() {
    if (rockButtonClicked === true && computerSelection() === 'rock') {
        result.textContent = 'Ничья';
    } else if (rockButtonClicked === true && computerSelection() === 'paper') {
        result.textContent = 'Победа';
    } else if (paperButtonClicked === true && computerSelection() === 'rock') {
        result.textContent = 'Поражение';
    } else if (paperButtonClicked === true && computerSelection() === 'rock') {
        result.textContent = 'Поражение';
    } else if(paperButtonClicked === true && computerSelection() === 'rock'){
        result.textContent = 'Поражение';
    }


}



