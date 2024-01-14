'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');

const scores = [0, 0];
let curentScore = 0;
let activePlayer = 0;

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  curentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `images/dice-${dice}.png`;
  if (dice !== 1) {
    curentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      curentScore;
  } else {
    switchPlayer();
  }
});

// Holding score functionality
btnHold.addEventListener('click', function () {
  scores[activePlayer] += curentScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
