'use strict'

const store = require("../store")
const winDraw = require('./windraw')


const createGameSuccess = function (response) {
  console.log(response.game)
  $('#change-password').hide()
  $('#start-game').hide()
  $('#current-player').show()
  $('#game-board').show()
  $('#message').text('New Game Started')
  store.game = response.game //in the store its adding game as parameter
  const gameObject = response.game
  console.log('Game Object: ', gameObject)
}

const createGameFailure = function (error) {
  $('#message').text('Game not created. Error: ' + error.responseJSON.message)
}


const selectBoxSuccess = function (response) {
  store.game = response.game
  const gameObject = store.game.cells
  console.log(gameObject)
  winDraw.gameWin(gameObject)
  $('#message').text('Move made. Waiting for next player.')

}

const selectBoxFailure = function (error) {
  $('#message').text('Move failed. Error: ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  selectBoxSuccess,
  selectBoxFailure
}
