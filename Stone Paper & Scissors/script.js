let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");


const drawGame = () => {
    msg.innerText = ("Game was Draw🟰. Play again");
    msg.style.backgroundColor = "blue";
};

const ranCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranChoice = Math.floor(Math.random() * 3);
    return options[ranChoice];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `Congratulations🎉, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScore.innerText = compscore;
        msg.innerText = `Oh no!😔, ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{

    const compChoice = ranCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
