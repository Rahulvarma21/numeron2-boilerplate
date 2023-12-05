// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
let playAgainBtn = document.getElementById('play-button');
playAgainBtn.addEventListener('click', function (){
    window.location.href = 'game.html';
});