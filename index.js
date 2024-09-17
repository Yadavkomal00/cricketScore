let finalScore = 0;
function getScore() {

    // below line gives score from 0 to 1 like 0.567654 or 0.23452
    // let score = Math.random() 

    // but we require score greater than 1 for cricket but we are getting as 5.67654
    // let score = Math.random() * 10;

    // we use roundoff to nearest lower integer and 
    // mod by 7 to get remainder values from 0 to 6
    let getScore = Math.round(Math.random() * 10) % 7;

    let scoreBoard = document.getElementById("scoreBoard");
    let currentRun = document.getElementById("currentRun");


    if (getScore == 5) {
        currentRun.style.display = "block";
        finalScore = 0;
        currentRun.innerHTML = "Game Over";
        scoreBoard.innerHTML = "out";
    }
    else if (getScore == 6) {
        currentRun.style.display = "block";
        currentRun.innerHTML = "Its a Six";
        finalScore += getScore;
        scoreBoard.innerHTML = finalScore + " runs";
    }
    else if (getScore == 4) {
        currentRun.style.display = "block";
        currentRun.innerHTML = "Its a boundary";
        finalScore += getScore;
        scoreBoard.innerHTML = finalScore + " runs";
    }
    else {
        currentRun.style.display = "none";
        currentRun.innerHTML = "";
        finalScore += getScore;
        scoreBoard.innerHTML = finalScore + " runs";
    }

    if (finalScore == 100) {
        currentRun.style.display = "block";
        currentRun.innerHTML = "Its a century complete";

    }
    else if (finalScore == 50) {
        currentRun.style.display = "block";
        currentRun.innerHTML = "Its a  half century complete";
    }

}

