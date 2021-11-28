var setScore = document.querySelector("#finalScore");

// Retreives local stroage 
var highScore = localStorage.getItem("highScore");
highScore = JSON.parse(highScore);

if (highScore !== null) {

    for (var i = 0; i < highScore.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = highScore[i].initials + " " + highScore[i].score;
        highScore.appendChild(createLi);

    }
}

