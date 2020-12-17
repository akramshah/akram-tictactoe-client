'use strict'

const store = require("../store")



const createGameSuccess = function (response) {
  $('col-4').html("")
  $('#current-player').show()
  $('#game-board').show()
  $('#message').text('New Game Started')
  store.game = response.game //in the store its adding game as parameter
  const gameObject = response.game
//  
}

const createGameFailure = function (error) {
  $('#message').text('Game not created. Error: ' + error.responseJSON.message)
}

const selectBoxSuccess = function (response) {
  store.game = response.game
  const gameObject = store.game.cells
}

const selectBoxFailure = function (error) {
  $('#message').text('Move failed. Error: ' + error.responseJSON.message)
}

const gamesPlayedSuccess = function (response) {
   $('#games-text').show()
  store.game = response.games
  console.log(store.game)
  const numberOfGames = store.game
  console.log(numberOfGames)
  const gameCounter = numberOfGames.length
  $('.game-number').html(gameCounter)
}

const gamesPlayedFailure = function (error) {
  $('#game-number').text('Could not retrieve games played.')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  selectBoxSuccess,
  selectBoxFailure,
  gamesPlayedSuccess,
  gamesPlayedFailure,
}
