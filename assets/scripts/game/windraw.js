const gameWin = function (winArray) {
  if (winArray[0] !== '' && winArray[0] === winArray[1] && winArray[0] === winArray[2]) {
    console.log('You won.')
  } else if (winArray[3] !== '' && winArray[3] === winArray[4] && winArray[3] === winArray[5]) {
    console.log('You won.')
  } else if (winArray[6] !== '' && winArray[6] === winArray[7] && winArray[6] === winArray[9]) {
    console.log('You won.')
  } else if (winArray[0] !== '' && winArray[0] === winArray[3] && winArray[0] === winArray[6]) {
    console.log('You won.')
  } else if (winArray[1] !== '' && winArray[1] === winArray[4] && winArray[1] === winArray[7]) {
    console.log('You won.')
  } else if (winArray[2] !== '' && winArray[2] === winArray[5] && winArray[2] === winArray[8]) {
    console.log('You won.')
  } else if (winArray[0] !== '' && winArray[0] === winArray[4] && winArray[0] === winArray[8]) {
    console.log('You won.')
  } else if (winArray[2] !== '' && winArray[2] === winArray[4] && winArray[2] === winArray[6]) {
    console.log('You won.')
  } else(console.log('Game continues.'))
}

module.exports = {
  gameWin
}