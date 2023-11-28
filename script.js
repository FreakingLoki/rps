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
    if (playerSelection === 'cheatcode') {
        console.log(`the computer chose ${computerSelection} but you annihilated the computer with an orbital laser. You win.`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`the computer chose ${computerSelection}, but you destroyed them with your big rock. You win.`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`the computer chose ${computerSelection}, but you encased it in paper. You win.`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`the computer chose ${computerSelection}, but you shredded it with your scissors. You win.`);
    } else if (playerSelection === computerSelection) {
        console.log(`you and the computer assailed each other with your respective choices, but since you both chose ${computerSelection}, nothing came of it. You tied.`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(`the computer wiped your ${playerSelection} off the planet with their roll of paper. You lose.`);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(`you attempted to give the computer a mean papercut, but it sliced you instead with its ${computerSelection}. You lose.`);
    } else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        console.log(`the computer smashed you to bits with a big ${computerSelection}. How uncivilized. You lose.`)
    } else {
        console.log(`something went wrong. You entered ${playerSelection} and the computer chose ${computerSelection}. I dunno, you figure it out.`)
    }
}

//code for testing
console.log(getComputerChoice());