'use strict'

const store = require("../store")

const createGameSuccess = function (response) {
  console.log(response.game)
  $('#change-password').hide()
  $('#message').text('New Game Started')
  store.game = response.game //in the store its adding game as parameter
  const gameObject = response.game
  console.log('Game Object: ', gameObject)
}

const createGameFailure = function (error) {
  $('#message').text('Game not created. Error: ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
