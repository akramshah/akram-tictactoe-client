const { data } = require('jquery')
const config = require('./../config')
const store = require('./../store')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    game: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const selectBox = function (cellIndex, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
    "game": {
      "cell": {
      "index": cellIndex,
      "value": player
      },
      "over": false
    }
  }
  })
}

module.exports = {
  createGame,
  selectBox
}
