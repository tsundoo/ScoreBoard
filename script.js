let number = document.getElementById("num");
let score = 0

function plusOne() {
  score += 1
  number.textContent = score
}

function plusTwo() {
  score += 2
  number.textContent = score
}

function plusThree() {
  score += 3
  number.textContent = score
}

let awayNumber = document.getElementById('numAway')
let score2 = 0

function plusOneAway() {
  score2 += 1
  awayNumber.textContent = score2
}

function plusTwoAway() {
  score2 += 2
  awayNumber.textContent = score2
}

function plusThreeAway() {
  score2 += 3
  awayNumber.textContent = score2
}