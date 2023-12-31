function getComputerChoice() {
    //this line sets choice to 0, 1, or 2
    let choiceNum = Math.floor(Math.random() * 3);
    let choice;

    if (choiceNum === 0) {
        choice = 'rock';
    } else if (choiceNum === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    };

    return choice;
};

function playRound(playerSelection, computerSelection) {
    let endText = 'blank';

    if (playerSelection === 'cheat') {
        endText = `the computer chose ${computerSelection} but you annihilated the computer with an orbital laser. You win.`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        endText = `the computer chose ${computerSelection}, but you destroyed them with your big rock. You win.`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        endText = `the computer chose ${computerSelection}, but you encased it in paper. You win.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        endText = `the computer chose ${computerSelection}, but you shredded it with your scissors. You win.`;
    } else if (playerSelection === computerSelection) {
        endText = `you and the computer assailed each other with your respective choices, but since you both chose ${computerSelection}, nothing came of it. You tied.`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        endText = `the computer wiped your ${playerSelection} off the planet with their roll of paper. You lose.`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        endText = `you attempted to give the computer a mean paper cut, but it sliced you instead with its ${computerSelection}. You lose.`;
    } else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        endText = `the computer smashed you to bits with a big ${computerSelection}. How uncivilized. You lose.)`
    } else {
        endText = `something went wrong. You entered ${playerSelection} and the computer chose ${computerSelection}. I dunno, you figure it out.`
    }

    return endText;
}

//testing
let player = 'rock';
let computer = getComputerChoice();

console.log(playRound(player, computer));