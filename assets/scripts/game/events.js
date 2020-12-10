const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const { isEmptyObject } = require('jquery')

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

const onSelectBox = function (event) {
  $(this).html(player)
  const cellIndex = $(this).data()
  api.selectBox(cellIndex, player)
  .then(ui.selectBoxSuccess)
  .catch(ui.selectBoxSuccess)
}

const checkBox = function () {
  if (store.game.cell === " ") {
  onSelectBox() 
} else {
  console.log('space was taken')
}
}

module.exports = {
  onCreateGame,
  onSelectBox
}