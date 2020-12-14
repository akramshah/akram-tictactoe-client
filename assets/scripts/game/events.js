const api = require("./api");
const ui = require("./ui");
const store = require("./../store");
const getFormFields = require("./../../../lib/get-form-fields.js");

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
    currentPlayer = "O";
    $(".player-id").html(currentPlayer);
  } else {
    currentPlayer = "X";
    $(".player-id").html(currentPlayer);
  }
};

const onSelectBox = function (event) {
  const cellIndex = $(event.target).data("cell-index");
  const gameArray = store.game.cells;
  const value = gameArray[cellIndex];
  if (value === "") {
    $(event.target).html(currentPlayer);
    api
      .selectBox(cellIndex, currentPlayer)
      .then(ui.selectBoxSuccess)
      .catch(ui.selectBoxFailure);

    switchPlayer();
  } else {
    $("#message").text("Space is occupied. Try again.");
  }
};

const onRestart = function (event) {
  api
    .restartGame()
    .then(function (response) {
      return response;
      console.log(response);
    })
    .then(ui.restartGameSuccess)
    .catch(ui.restartGameFailure);
};


const onGamesPlayed = function (event) {
  const form = event.target;
  const gameData = getFormFields(form);
  console.log(gameData);
  api.gamesPlayed().then(ui.gamesPlayedSuccess).catch(ui.gamesPlayedFailure);
};

module.exports = {
  onCreateGame,
  onSelectBox,
  onGamesPlayed,
  onRestart,
};
