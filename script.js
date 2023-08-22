const totalScore = { playerScore: 0, computerScore: 0 }

function getComputerChoice() {
    let rpsChoice = ['Rock', 'Paper', 'Scissors']
    let randomPicks = Math.floor(Math.random() * 3)

    return rpsChoice[randomPicks]
}

function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0;
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        score = 1
    } else {
        score = -1
    }
    return score;


}
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const picksDiv = document.getElementById('picks')
    const playerScoreDiv = document.getElementById('playerScore')

    if (score == -1) {
        resultDiv.innerText = 'You lose!'
    } else if (score == 0) {
        resultDiv.innerText = 'its a tie'
    } else {
        resultDiv.innerText = 'You won!'
    }

    picksDiv.innerText = `🧑🏼${playerChoice} vs 💻${computerChoice}`
    playerScoreDiv.innerText = ` Player score: ${totalScore['playerScore']} vs Computer score: ${totalScore['computerScore']}`



}

function onclickRPS(playerChoice) {
    // This is basically the heart of the whole code
    console.log(playerChoice);
    let computerChoice = getComputerChoice()
    let score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    totalScore['computerScore'] -= score
    showResult(score, playerChoice, computerChoice)



}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButtons')
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onclickRPS(rpsButton.value)
    })

    const clearGameButton = document.getElementById('clearGame')
    clearGameButton.onclick = () => endGame(totalScore)

}

function endGame(totalScore) {
    totalScore['playerScore']=0
    totalScore['computerScore']=0
    const resultDiv = document.getElementById('result')
    const picksDiv = document.getElementById('picks')
    const playerScoreDiv = document.getElementById('playerScore')

    resultDiv.innerText = ''
    picksDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()