// Variables
debugger
var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var gameState = 'notStarted';  //started // ended
var player = {
        name: '',
        score: 0
    };
var computer = {
        score: 0
    };


var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

var gameWinnerResult = document.getElementById('js-gameWinnerResult'); //new

var playerImage = document.getElementById('js-playerPickImage');
var computerImage = document.getElementById('js-computerPickImage');
// Events

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

// Functions

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
     //   gameWinnerResult.innerHTML = ''; //new
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');

  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 

    
  }
}

function playerPick(playerPick) {
   console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';


  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
        playerResultElem.innerHTML = "Draw!";
        computerResultElem.innerHTML = "Draw!";

    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    setGamePoints();
    setPickPlayerImage(playerPick);
    setPickComputerImage(computerPick);
    checkGameWinner();
}

function setGamePoints(playerPick) {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;

}

function checkGameWinner() {
    if (player.score == 10) {
    //gameWinnerResult.innerHTML = "You win! Congratulation"; //New
        alert('You win');
        gameState = 'ended';
    } else if (computer.score == 10){
    //gameWinnerResult.innerHTML = "Computer win"; //New
        alert('Computer win');
        gameState = 'ended';
    }
    
    setGameElements();
}



function setPickPlayerImage(playerPick) {
    
   playerImage.innerHTML = ''; 
              
    if (playerPick == 'rock') {
        playerImage.innerHTML = "<img src = images/rock.jpg>";
    
    } else if (playerPick == 'scissors') {
        playerImage.innerHTML = "<img src = images/scissor.jpg>";

    } else {
        playerImage.innerHTML = "<img src = images/paper.jpg>";
    }
}


function setPickComputerImage(computerPick) {
   
    computerImage.innerHTML = '';

    if (computerPick === 'rock') {
        computerImage.innerHTML = "<img src = images/rock.jpg>";
    
    } else if (computerPick === 'scissors') {
        computerImage.innerHTML = "<img src = images/scissor.jpg>";

    } else {
        computerImage.innerHTML = "<img src = images/paper.jpg>";
    }
}

