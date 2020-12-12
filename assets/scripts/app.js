'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('.authenticated').hide()
  $('#current-player').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click', gameEvents.onCreateGame)
  $('.select-box').click(gameEvents.onSelectBox)
  $('#game-board').off('click')
})


