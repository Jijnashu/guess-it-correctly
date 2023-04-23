'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayColor = function (clr) {
  document.querySelector('body').style.backgroundColor = clr;
};
// console.log(secretNumber);
// const number = Number(document.querySelector('.guess').value);
// console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const number = Number(document.querySelector('.guess').value);

  if (!number) {
    // document.querySelector('.message').textContent = '❌ No Number';
    displayMessage('❌ No Number');
  } else if (number === secretNumber) {
    document.querySelector('.number').innerHTML = secretNumber;
    displayColor('green');
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('body').style.backgroundColor = 'green';
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (number !== secretNumber) {
    if (score > 1) {
      displayMessage(number > secretNumber ? '📉 Too High' : '📈 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   number > secretNumber ? '📉 Too High' : '📈 Too Low';
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      displayColor('red');
      // document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //  else if (number > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over';
  //   }
  // } else if (number < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayColor('#222');
  displayMessage('Start guessing...');
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  // document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
});
