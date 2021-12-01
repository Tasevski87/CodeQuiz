var highScore = document.querySelector("#highScores");
var storage = JSON.parse(localStorage.getItem("highscore"));

if (storage === null) {
    highScore.textContent= 'No Highscores'
} else {
    highScore.textContent = ''
    for (var i = 0; i < storage.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = 'Name: ' + storage[i].name + " -- Score: " + storage[i].currentScore;
        highScore.appendChild(createLi);
    }
}