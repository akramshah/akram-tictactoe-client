const api = require("./api");
const ui = require("./ui");
const store = require("./../store");
const getFormFields = require("./../../../lib/get-form-fields.js");


let winGame = false
const onCreateGame = function (event) {
  currentPlayer = "X"
  winGame = false
  $('.col-4').html("")
  //reassign current player
  //reassign game win
  //clear the board

  api
    .createGame()
    .then(function (response) {
      return response;
      // console.log(response)
    })
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};

let currentPlayer = "X";

const switchPlayer = function () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
    //Switches current players by changing the HTML of current player.
    $(".player-id").html(currentPlayer);
  } else {
    currentPlayer = "X";
    $(".player-id").html(currentPlayer);
  }
};

const onSelectBox = function (event) {
  const cellIndex = $(event.target).data("cell-index");
  // console.log(cellIndex)
  //The position of the cell-index on the board.
  const gameArray = store.game.cells;
  //The array (stores the player when clicked)
  // console.log('The game array is ' , gameArray)
  const value = gameArray[cellIndex];
  if (value === "" && winGame === false)
  //if the value of the box is empty, and the the winGame is false, continue game
  //(reads that the game is not over, new game has begun.)
   {
     gameArray[cellIndex] = currentPlayer
     gameWin(gameArray)
    $(event.target).html(currentPlayer);
    api
      .selectBox(cellIndex, currentPlayer)
      .then(ui.selectBoxSuccess)
      .catch(ui.selectBoxFailure);

    switchPlayer();
  } else {
    $("#message").text("Error. Space cannot be occupied.");
  }
  
};



const onGamesPlayed = function (event) {
  const form = event.target;
  const gameData = getFormFields(form);
  // console.log(gameData);
  // Console logs the entire game data for user. Could possibly use in the future to create 
  // "Most Games Played" leaderboard.
  api.gamesPlayed()
  .then(ui.gamesPlayedSuccess)
  .catch(ui.gamesPlayedFailure);
};

const gameWin = function (winArray) {
  //1. Checks rows, columns, and diagonals for every possible win scenario.
  //2. If comparisons are true, display win message.
  //3. Set winGame to true, triggering the selectBox function to stop further clicking. 
  if (winArray[0] !== '' && winArray[0] === winArray[1] && winArray[0] === winArray[2]) {
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[3] !== '' && winArray[3] === winArray[4] && winArray[3] === winArray[5]) {
    
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[6] !== '' && winArray[6] === winArray[7] && winArray[6] === winArray[9]) {
    
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[0] !== '' && winArray[0] === winArray[3] && winArray[0] === winArray[6]) {
    
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[1] !== '' && winArray[1] === winArray[4] && winArray[1] === winArray[7]) {
    
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[2] !== '' && winArray[2] === winArray[5] && winArray[2] === winArray[8]) {
    
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[0] !== '' && winArray[0] === winArray[4] && winArray[0] === winArray[8]) {
    
    $('#message').html('You won!')
    winGame = true
  } else if (winArray[2] !== '' && winArray[2] === winArray[4] && winArray[2] === winArray[6]) {
    
    $('#message').html('You won!')
  } else if (winArray[0] !== '' && winArray[1] !== '' && winArray[2] !== '' && winArray[3] !== '' && winArray[4] !== '' && winArray[5] !== '' && winArray[6] !== '' && winArray[7] !== '' && winArray[8] !== '') {
    
    $('#message').html('Draw. Try Again.')
    winGame = true

  }
}
module.exports = {
  onCreateGame,
  onSelectBox,
  onGamesPlayed,
};
