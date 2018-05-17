(function () {
  var btnRock = document.querySelector('.rock'),
    btnPaper = document.querySelector('.paper'),
    btnScissors = document.querySelector('.scissors'),
    btnNewGame = document.querySelector('.newGame'),
    output = document.querySelector('#output'),
    result = document.querySelector('#result'),
    playerWins = 0,
    aiWins = 0,
    roundLimit = 0;

  var roundCounter = function () {
    return window.prompt('How many round you want to play entire game?');
  }

  function showResult() {
    result.innerHTML = roundLimit + ' round game' + '<br>' + 'YOU ' + playerWins + ' : ' + aiWins + ' AI';
  }
  showResult();

  var playerMove = function (move) {
    var rounds = roundLimit;
    var ai = function () {
      var aiPick = ['paper', 'rock', 'scissors'];
      return aiPick[Math.floor(Math.random() * 3)];
    }
    var aiMove = ai();
    var gameOverMsg = ' game over, please press the new game button!';
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
      btnPaper.disabled = true;
      btnRock.disabled = true;
      btnScissors.disabled = true;
    }
    if (aiWins == rounds) {
      output.innerHTML = 'AI WON THE ENTIRE GAME ' + '<br>' + gameOverMsg;
      btnPaper.disabled = true;
      btnRock.disabled = true;
      btnScissors.disabled = true;
    }
  }


  // listeners
  btnPaper.addEventListener('click', function () {
    playerMove('paper');
  });
  btnRock.addEventListener('click', function () {
    playerMove('rock');
  });
  btnScissors.addEventListener('click', function () {
    playerMove('scissors');
  });
  btnNewGame.addEventListener('click', function () {
    roundLimit = roundCounter();
    playerWins = 0;
    aiWins = 0;
    output.innerHTML = '';
    showResult();
    btnPaper.disabled = false;
    btnRock.disabled = false;
    btnScissors.disabled = false;
  });

})();