const api = require("./api");
const ui = require("./ui");
const store = require("./../store");

const onCreateGame = function (event) {
  api
    .createGame()
    .then(function (response) {
      return response;
      console.log(response);
    })
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};


let currentPlayer = "X";

const switchPlayer = function () {
  if (currentPlayer === "X") {
    currentPlayer = "O"
    $('.player-id').html(currentPlayer)
  } else {
    currentPlayer = "X"
    $('.player-id').html(currentPlayer)
  }
}


const onSelectBox = function (event) {
  const cellIndex = $(event.target).data("cell-index");
  console.log(cellIndex)
  const gameArray = store.game.cells;
  console.log(gameArray)
  const value = gameArray[cellIndex];
  //  console.log('value is ', value)
  //  console.log('condition is ', value === '')

  if (value === "") {
    $(event.target).html(currentPlayer);
    api
      .selectBox(cellIndex, currentPlayer)
      .then(ui.selectBoxSuccess)
      .catch(ui.selectBoxFailure);
    // console.log('value is', value)
  
    switchPlayer();
    
  } else {
    $("#message").text("Space is occupied. Try again.");
  }
};



module.exports = {
  onCreateGame,
  onSelectBox,
}
