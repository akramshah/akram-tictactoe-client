const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Account created successfully.')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign-up failed. Error ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully.')
  $('form').trigger('reset')
}

const signInFailure = function (response) {
  $('#message').text('Sign in failed. Error ' + error.responseJSON.message)
  $('form').trigger('reset')
}

module.exports ={
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}