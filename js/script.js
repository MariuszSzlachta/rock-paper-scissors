(function () {
var btnRock = document.querySelector('.rock'),
  btnPaper = document.querySelector('.paper'),
  btnScissors = document.querySelector('.scissors'),
  btnNewGame = document.querySelector('.newGame'),
  buttons = document.querySelectorAll('.btn'),
  output = document.querySelector('#output'),
  result = document.querySelector('#result'),
  playerWins = 0,
  aiWins = 0,
  roundLimit = 0,
  gamePossible = false;

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (gamePossible === true) {
        playerMove(this.getAttribute('class'));
      }
    });
  }

var roundCounter = function () {
  return window.prompt('How many round you want to play entire game?');
}

function showResult() {
  result.innerHTML = roundLimit + ' round game' + '<br>' + 'YOU ' + playerWins + ' : ' + aiWins + ' AI';
}
// showResult();

// game off function
var gameOverMsg = ' game over, please press the new game button!';

var ai = function () {
  var aiPick = ['paper', 'rock', 'scissors'];
  return aiPick[Math.floor(Math.random() * 3)];
}
var playerMove = function (move) {

  var rounds = roundLimit;
  var aiMove = ai();
  // who win
  if (move == aiMove) {
    output.innerText = 'It\'s TIE! Player and computer played ' + move.toUpperCase();
  } else if ((move == 'paper') && (aiMove == 'rock') || (move == 'rock') && (aiMove == 'scissors') || (move == 'scissors') && (aiMove == 'paper')) {
    output.innerText = 'YOU WON: you played ' + move.toUpperCase() + ' and computer played ' + aiMove.toUpperCase();
    playerWins++;
  } else {
    output.innerText = 'Computer WON: you played ' + move.toUpperCase() + ' but computer played: ' + aiMove.toUpperCase();
    aiWins++;
  }

  //entire game wins
  showResult();
  
  if (playerWins == rounds) {
    output.innerHTML = 'YOU WON THE ENTIRE GAME ' + '<br>' + gameOverMsg;
    gamePossible = false;
    showResult();
  }
  if (aiWins == rounds) {
    var who = 'AI WON THE ENTIRE GAME '
    output.innerHTML = who + '<br>' + gameOverMsg;
    gamePossible = false;
    showResult();
  }
}

btnNewGame.addEventListener('click', function () {
  roundLimit = roundCounter();
  playerWins = 0;
  aiWins = 0;
  output.innerHTML = '';
  showResult();
  gamePossible = true;
});

})();