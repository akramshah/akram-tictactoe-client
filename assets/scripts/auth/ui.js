const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Account created successfully.')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign-up failed. Error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully.')
  store.user = response.user
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed. Error: ' + error.responseJSON.message)
}

const changePasswordSuccess = function (response) {
  $('#message').text('Password changed successfully.')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Password change failed. Error: ' + error.responseJSON.message)
}

const signOutSuccess = function (response) {
  $('#message').text('Signed out successfully.')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('Sign out failed. Error: ' + error.responseJSON.message)
}


module.exports ={
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}