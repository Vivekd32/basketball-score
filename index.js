let hScore = 0;
let gScore = 0;

let HomeScoreEl = document.getElementById("home-point-el");
let guestScoreEl = document.getElementById("guest-point-el");

HomeScoreEl.textContent = hScore;
guestScoreEl.textContent = gScore;

let homePoints = 0;

function incrementOnePt() {
  homePoints += 1;
  HomeScoreEl.textContent = homePoints;
}
function incrementTwoPt() {
  homePoints += 2;
  HomeScoreEl.textContent = homePoints;
}
function incrementThreePt() {
  homePoints += 3;
  HomeScoreEl.textContent = homePoints;
}

let guestPoints = 0;

function incrementOnePtG() {
  guestPoints += 1;
  guestScoreEl.textContent = guestPoints;
}
function incrementTwoPtG() {
  guestPoints += 2;
  guestScoreEl.textContent = guestPoints;
}
function incrementThreePtG() {
  guestPoints += 3;
  guestScoreEl.textContent = guestPoints;
}

let resetEL = document.getElementById("reset-btn");

function resetScore() {
  homePoints = 0;
  guestPoints = 0;
  HomeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
