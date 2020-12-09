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

module.exports = {
  onCreateGame
}