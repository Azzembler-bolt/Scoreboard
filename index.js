
const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');

const homeButtons = document.querySelectorAll('.container div:nth-child(1) .increment');


const guestButtons = document.querySelectorAll('.container div:nth-child(2) .increment');


let homeScore = 0;
let guestScore = 0;

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

guestButtons[0].addEventListener('click', function() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
});


guestButtons[1].addEventListener('click', function() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
});


guestButtons[2].addEventListener('click', function() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
});