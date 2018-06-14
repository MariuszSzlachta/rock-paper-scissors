
// (function () {
// ------------DECLARATIONS----------------

var playerMoveElements = document.querySelectorAll('.player-move'),
  playerMoveElementsLen = playerMoveElements.length,
  modals = document.querySelectorAll('.modal'),
  overlay = document.querySelector('.overlay'),
  btnClose = document.querySelector('.close'),
  comunicatField = document.querySelector('.comunicat'),
  btnNewGame = document.querySelector('.newGame'),
  buttons = document.querySelectorAll('.btn'),
  output = document.querySelector('#output'),
  result = document.querySelector('#result'),
  tableBody = document.querySelector('.table-body');
// ---------------EVENT LISTENERS------------------
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnNewGame.addEventListener('click', gameStart);
// -------------------OBJECTS AND FUNCTIONS----------------------
var params = {
  playerWins: 0,
  aiWins: 0,
  roundLimit: 0,
  gameOverMsg: ' game over, please press the new game button!',
  gamePossible: false,
  progress: [],
  tableRow: [],
  currentRound: 0,
  nthInit: false
}
// prompt
var roundCounter = function () {
  return Number(window.prompt('How many round you want to play entire game?'));
}
// pokaż wynik
function showResult() {
  result.innerHTML = params.roundLimit + ' round game' + '<br>' + 'YOU ' + params.playerWins + ' : ' + params.aiWins + ' AI';
}
// listeners for player moves
for (var i = 0; i < playerMoveElementsLen; i++) {
  playerMoveElements[i].addEventListener('click', function () {
    if (params.gamePossible === true) {
      game(this.getAttribute('data-move'));
    }
  });
}
// listeners for modal
buttonsLen = buttons.length;
for (var i = 0; i < buttonsLen; i++) {
  buttons[i].addEventListener('click', function () {
    if (params.gamePossible === false & params.nthInit == true) {
      output.classList.add('hide'); // znika pole output
      showModal();
    }
  });
}

// reset parametrów
function resetParams() {
  params.roundLimit = roundCounter();
  params.playerWins = 0;
  params.aiWins = 0;
  output.classList.remove('hide');
  output.innerHTML = '';
  params.gamePossible = true;
  params.tableRow = [];
  params.progress = [];
  tableBody.innerHTML = '';
  params.currentRound = 0;
  params.nthInit = true;
}

function gameStart() {
  resetParams();
  showResult();
}

function showEndGameTable() {
  for (var i = 0; i < params.progress.length; i++) {
    params.tableRow.push('<tr><td>' + params.progress[i].rounds + '</td><td>' + params.progress[i].plMove + '</td><td>' + params.progress[i].aiMove + '</td><td>' + params.progress[i].roundResult + '</td><td>' + params.progress[i].gameResult + '</td></tr>');
    tableBody.innerHTML += params.tableRow[i];
  }
}

// ruch komputera
var ai = function () {
  var aiPick = ['paper', 'rock', 'scissors'];
  return aiPick[Math.floor(Math.random() * 3)];
}
// -----GAME--------
function game(playerMove) {
  var aiMove = ai();
  // who win
  //remis
  if (playerMove == aiMove) {
    output.innerText = 'It\'s TIE! Player and computer played ' + playerMove.toUpperCase();
    roundResult = '0 : 0';
    //player wins
  } else if ((playerMove == 'paper') && (aiMove == 'rock') || (playerMove == 'rock') && (aiMove == 'scissors') || (playerMove == 'scissors') && (aiMove == 'paper')) {
    output.innerText = 'YOU WON: you played ' + playerMove.toUpperCase() + ' and computer played ' + aiMove.toUpperCase();
    params.playerWins++;
    roundResult = '1 : 0';
    // ai wins
  } else {
    output.innerText = 'Computer WON: you played ' + playerMove.toUpperCase() + ' but computer played: ' + aiMove.toUpperCase();
    params.aiWins++;
    roundResult = '0 : 1';
  }
  params.currentRound++;
  // tworzenie obiektu co kolejkę
  params.progress.push({
    rounds: params.currentRound,
    plMove: playerMove,
    aiMove: aiMove,
    roundResult: roundResult,
    gameResult: params.playerWins + ' : ' + params.aiWins
  });
  //-------------------------- game----------------
  showResult();
  // warunki wygranej całej gry
  if (params.playerWins == params.roundLimit) {
    comunicatField.innerHTML = 'YOU WON THE ENTIRE GAME ' + '<br>' + params.gameOverMsg;
    params.gamePossible = false;
    showEndGameTable();
  }
  if (params.aiWins == params.roundLimit) {
    comunicatField.innerHTML = 'AI WON THE ENTIRE GAME ' + '<br>' + params.gameOverMsg;
    params.gamePossible = false;
    showEndGameTable();
  }

};

// -----------------------------obsługa modali----------------------------------------

function showModal() {
  // do modala dodaj klase show || 
  // do overlaya dodaj klase show
  overlay.classList.add('show');
  modals[0].classList.add('show');
};

function closeModal(event) {
  // niech sie uruchamia po nacisnieciu x z klasą close i niech usówa klase show z modala i overlaya
  event.stopPropagation();
  overlay.classList.remove('show');
  modals[0].classList.remove('show');
}
// usuniecie propagacji
(function delPropagation() {
  for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function (event) {
      event.stopPropagation();
    })
  };
})();

// })();