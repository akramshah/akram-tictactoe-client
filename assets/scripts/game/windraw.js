const events = require("./ui");

const gameWin = function (winArray) {
  if (winArray[0] !== '' && winArray[0] === winArray[1] && winArray[0] === winArray[2]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[3] !== '' && winArray[3] === winArray[4] && winArray[3] === winArray[5]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[6] !== '' && winArray[6] === winArray[7] && winArray[6] === winArray[9]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[0] !== '' && winArray[0] === winArray[3] && winArray[0] === winArray[6]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[1] !== '' && winArray[1] === winArray[4] && winArray[1] === winArray[7]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[2] !== '' && winArray[2] === winArray[5] && winArray[2] === winArray[8]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[0] !== '' && winArray[0] === winArray[4] && winArray[0] === winArray[8]) {
    $('#message').html('You won!')
    $('.col-4').unbind('click')
    $("#restart").show();
  } else if (winArray[2] !== '' && winArray[2] === winArray[4] && winArray[2] === winArray[6]) {
    $('#message').html('You won!')
    $("#restart").show();
  } else if (winArray[0] !== '' && winArray[1] !== '' && winArray[2] !== '' && winArray[3] !== '' && winArray[4] !== '' && winArray[5] !== '' && winArray[6] !== '' && winArray[7] !== '' && winArray[8] !== '') {
    $('#message').html('Draw. Try Again.')
    $('.col-4').unbind('click')
    
  }
}



module.exports = {
  gameWin
}