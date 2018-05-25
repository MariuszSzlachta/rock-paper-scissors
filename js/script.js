(function () {
  var playerMoveElements = document.querySelectorAll('.player-move'),
  playerMoveElementsLen = playerMoveElements.length,
  // btnRock = document.querySelector('.rock'),
  // btnPaper = document.querySelector('.paper'),
  // btnScissors = document.querySelector('.scissors'),
  btnNewGame = document.querySelector('.newGame'),
  buttons = document.querySelectorAll('.btn'),
  output = document.querySelector('#output'),
  result = document.querySelector('#result');
  
  var params = {
    playerWins:0,
    aiWins: 0,
    roundLimit: 0    
  }

  var roundCounter = function () {
    return window.prompt('How many round you want to play entire game?');
  }

  function showResult() {
    result.innerHTML = params.roundLimit + ' round game' + '<br>' + 'YOU ' + params.playerWins + ' : ' + params.aiWins + ' AI';
  }
  // showResult();

  // game off function
  var gameOverMsg = ' game over, please press the new game button!';

  function gameOver() {
    buttonsLen = buttons.length;
    for (var i = 0; i < buttonsLen; i++) {
      buttons[i].addEventListener('click', function () {
        output.innerHTML = gameOverMsg;
        result.innerHTML = '';
      });
    }
  }

  var ai = function () {
    var aiPick = ['paper', 'rock', 'scissors'];
    return aiPick[Math.floor(Math.random() * 3)];
  }
  var playerMove = function (move) {

    var rounds = params.roundLimit;
    var aiMove = ai();
    // who win
    if (move == aiMove) {
      output.innerText = 'It\'s TIE! Player and computer played ' + move.toUpperCase();
    } else if ((move == 'paper') && (aiMove == 'rock') || (move == 'rock') && (aiMove == 'scissors') || (move == 'scissors') && (aiMove == 'paper')) {
      output.innerText = 'YOU WON: you played ' + move.toUpperCase() + ' and computer played ' + aiMove.toUpperCase();
      params.playerWins++;
      console.log('PLAYER: ' + params.playerWins);
    } else {
      output.innerText = 'Computer WON: you played ' + move.toUpperCase() + ' but computer played: ' + aiMove.toUpperCase();
      params.aiWins++;
      console.log('AI: ' + params.aiWins);
    }

    //entire game wins
    showResult();

    if (params.playerWins == rounds) {
      output.innerHTML = 'YOU WON THE ENTIRE GAME ' + '<br>' + gameOverMsg;
      gameOver();
    }
    if (params.aiWins == rounds) {
      output.innerHTML = 'AI WON THE ENTIRE GAME ' + '<br>' + gameOverMsg;
      gameOver();
    }
  }

  function gameStart() {
    for (var i = 0; i < playerMoveElementsLen; i++) {
      playerMoveElements[i].addEventListener('click', function(){        
        playerMove(this.getAttribute('data-move'));
      });
    }
  }

  // listeners

  btnNewGame.addEventListener('click', function () {
    params.roundLimit = roundCounter();
    params.playerWins = 0;
    params.aiWins = 0;
    output.innerHTML = '';
    showResult();
    gameStart();
  });

})();