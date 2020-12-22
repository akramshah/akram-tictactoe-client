"use strict";

const authEvents = require("./auth/events");
const gameEvents = require("./game/events");

$(() => {
  $(".authenticated").hide(); //Buttons after log in
  $("#current-player").hide(); //Current player display
  $("#game-board").hide(); //Game-board
  $("#restart").hide(); //Restart-button
  $("#signup-message").hide(); //Sign-up message
  $("#sign-up").on("submit", authEvents.onSignUp); //Sign up button
  $("#sign-in").on("submit", authEvents.onSignIn); //Sign in button
  $("#change-password").on("submit", authEvents.onChangePassword); //Change password button
  $("#sign-out").on("click", authEvents.onSignOut); //Sign out button
  $("#start-game").on("click", gameEvents.onCreateGame); //Start game button
  $(".select-box").click(gameEvents.onSelectBox); //Board click button
  $("#games-played").on("click", gameEvents.onGamesPlayed); //Games played button
});
