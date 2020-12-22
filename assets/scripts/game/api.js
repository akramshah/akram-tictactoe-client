const { data } = require("jquery");
const config = require("./../config");
const store = require("./../store");

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "POST",
    game: {},
    headers: {
      Authorization: "Bearer " + store.user.token,
    },
  });
};

const selectBox = function (cellIndex, currentPlayer) {
  return $.ajax({
    url: config.apiUrl + "/games/" + store.game._id,
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + store.user.token,
    },
    data: {
      game: { //the game object
        cell: {
          index: cellIndex, //index (squares on board)
          value: currentPlayer, //currentPlayer assigned to X
        },
        over: false, //if game is over or not.
      },
    },
  });
};

const gamesPlayed = function (data) {
  return $.ajax({
    url: config.apiUrl + "/games",
    method: "GET",
    data: data,
    headers: {
      Authorization: "Bearer " + store.user.token,
    },
  });
};

module.exports = {
  createGame,
  selectBox,
  gamesPlayed,
};
