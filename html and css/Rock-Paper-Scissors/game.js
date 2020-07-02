const weakToDict = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock',
}
const rpsArray = ['rock', 'paper', 'scissors']
let myScore = 0, compScore = 0, ties = 0 

const play_round = (playerChoice) => {
    const computerChoice = rpsArray[Math.floor(Math.random() * 3)]
    let msg = "Computer played <b>" + computerChoice + "</b>"
    msg += "<br>You played <b>" + playerChoice + "</b>"
    declare_winner(msg, playerChoice, computerChoice)
}

const declare_winner = (msg, playerChoice, computerChoice) => {
    if(playerChoice === computerChoice) {
        msg += "<br><br> Ugh... it's a tie"
        update_ties()
    }else if(weakToDict[playerChoice] === computerChoice){
        msg += '<br><br> <span style="color:red; font-size:50px;">YOU LOST!</span>'
        update_cpu_score()
    }else{
        msg += "<br> <h1>Nice, you won</h1>"
        update_user_score()
    }
    document.getElementById("cpu_play").innerHTML = msg
}

let update_user_score = () => {
    myScore++;
    document.getElementById("usr_score").innerHTML = myScore
}

let update_cpu_score = () => {
    compScore++;
    document.getElementById("cpu_score").innerHTML = compScore
}

let update_ties = () => {
    ties++;
    document.getElementById("ties_score").innerHTML = ties
}
