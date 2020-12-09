const api = require('./api')
const ui = require('./ui')

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



module.exports = {
  onCreateGame,
  onSelectBox
}