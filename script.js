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
}

//code for testing
console.log(getComputerChoice());