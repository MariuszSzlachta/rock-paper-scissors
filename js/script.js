(function () {
  var btnRock = document.querySelector('.rock'),
    btnPaper = document.querySelector('.paper'),
    btnScissors = document.querySelector('.scissors'),
    output = document.querySelector('#output');

  var playerMove = function (move) {
    // losowanie ruchu komputera z przyporządkowaniem w tabeli
    var ai = function () {
      var aiPick = ['paper', 'rock', 'scissors'];
      return aiPick[Math.floor(Math.random() * 3)];
    }
    var aiMove = ai();
    // who win
    if (move == aiMove) {
      output.innerText = 'It\'s TIE! Player and computer played ' + move.toUpperCase();
    } else if ((move == 'paper') && (aiMove == 'rock') || (move == 'rock') && (aiMove == 'scissors') || (move == 'scissors') && (aiMove == 'paper')) {
      output.innerText = 'YOU WON: you played ' + move.toUpperCase() + ' and computer played ' + aiMove.toUpperCase();
    } else {
      output.innerText = 'Computer WON: you played ' + move.toUpperCase() + ' but computer played: ' + aiMove.toUpperCase();
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

})();