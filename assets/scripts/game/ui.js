'use strict'

const store = require("../store")



const createGameSuccess = function (response) {
  $('col-4').html("")
  //All board spaces are empty.
  $('#current-player').show()
  //Show who is the current player.
  $('#game-board').show()
  //Display game board.
  $('#message').text('New Game Started')
  //Show message when new game is started.
  store.game = response.game //in the store its adding game as parameter
  // console.log(store.game) 
}

const createGameFailure = function (error) {
  $('#message').text('Game not created. Error: ' + error.responseJSON.message)
}

const selectBoxSuccess = function (response) {
  store.game = response.game
  // console.log(store.game)
}

const selectBoxFailure = function (error) {
  $('#message').text('Move failed. Error: ' + error.responseJSON.message)
}

const gamesPlayedSuccess = function (response) {
   $('#games-text').show()
  store.game = response.games
  // console.log(store.game)
  const numberOfGames = store.game
  // console.log(numberOfGames)
  //Shows number of games played (objects)
  const gameCounter = numberOfGames.length
  //Length of games played.
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
