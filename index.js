
const homeScoreEl = document.getElementById('home-score');
const awayScoreEl = document.getElementById('away-score');

const homeButtons = document.querySelectorAll('.container div:nth-child(1) .increment');


const awayButtons = document.querySelectorAll('.container div:nth-child(2) .increment');


let homeScore = 0;
let awayScore = 0;

homeButtons[0].addEventListener('click', function() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
});


homeButtons[1].addEventListener('click', function() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
});


homeButtons[2].addEventListener('click', function() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
});

awayButtons[0].addEventListener('click', function() {
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
});


awayButtons[1].addEventListener('click', function() {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
});


awayButtons[2].addEventListener('click', function() {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
});