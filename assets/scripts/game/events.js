const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onCreateGame = function (event) {
  api.createGame()
  .then(function(response) {
    return response
    console.log(response)
  })
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

const player = 'X'
const switchPlayer = function () {

}

const onSelectBox = function (event) {
  console.log('did this print?')
  const cellIndex = $(event.target).data("cell-index") 
  console.log(cellIndex)
  const gameArray =  store.game.cells 
  console.log(gameArray)
  const value = gameArray[cellIndex]
   console.log('value is ', value)
   console.log('condition is ', value === '')
  if (value === '') {
    $(event.target).html(player)
  api.selectBox(cellIndex, player)
  .then(ui.selectBoxSuccess)
  .catch(ui.selectBoxFailure)
  console.log('value is', value)
  } else {
    $('#message').text('Space is occupied. Try again.')
  }
}


module.exports = {
  onCreateGame,
  onSelectBox
}