const store = require('./../store')

const signUpSuccess = function (response) {
  $('#signup-message').text('Account created successfully.')
  //Display message when account is created.
  $('form').trigger('reset')
  $("#signup-message").show();
  //Show the sign-up message.
}

const signUpFailure = function (error) {
  $('#signup-message').text('Sign-up failed. Error: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully.')
  store.user = response.user
  //store the User's credentials when signing in
  $('.unauthenticated').hide()
  //Hide unauthenticated (sign up + login)
  $('.authenticated').show()
  //Show authenticated (change password, played games, sign out, start game)
  $('#games-text').hide()
  //Hide games played until button is clicked.
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
  $('#signup-message').text('Signed out successfully.')
  //Sign out message should display when logged out.
  $('.unauthenticated').show()
  //Sign up + login reappear
  $('.authenticated').hide()
  //Change password, played games, sign out, and start game hidden.
  $('#signup-message').show()
  //Shows the signed out message.
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('Sign out failed. Error: ' + error.responseJSON.message)
  //These error messages are default mongoose messages. In the future, change to custom errors.
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