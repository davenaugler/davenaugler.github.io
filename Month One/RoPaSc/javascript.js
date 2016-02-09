var ties = 0;
var wins = 0;
var losses = 0;

// randInt returns a random integer between 0 and 2
function randInt() {return Math.floor(Math.random()*3);}

  function msgAlert(msg, player, comp) {
var outcome = ["Rock", "Paper", "Scissors"];

if (msg === "tie") {
    alert("Tie!\n" + "Player: " + outcome[player] + "\n" + "Computer: " + outcome[comp]);
}

if (msg === "win") {
    alert("You won!\n" + "Player: " + outcome[player] + "\n" + "Computer: " + outcome[comp]);
}          

if (msg === "lose") {
    alert("You lost!\n" + "Player: " + outcome[player] + "\n" + "Computer: " + outcome[comp]);
}
}

function updateScore(result) {
var tie = document.getElementById("tie");
var win = document.getElementById("win");
var lose = document.getElementById("lose");

if (result === "tie") {
    ties++;
    tie.innerHTML = ties;
}

if (result === "win") {
    wins++;
    win.innerHTML = wins;
}

if (result === "lose") {
    losses++;
    lose.innerHTML = losses;
}
}

function hand(player) {
var comp = randInt();

if (player === comp) {
    updateScore("tie");
    msgAlert("tie", player, comp);
}

/* Rock Conditions */
if (player === 0 && comp === 1) {
    updateScore("lose");
    msgAlert("lose", player, comp);
}

if (player === 0 && comp === 2) {
    updateScore("win");
    msgAlert("win", player, comp);
}

/* Paper Conditions */
if (player === 1 && comp === 0) {
    updateScore("win");
    msgAlert("win", player, comp);
}

if (player === 1 && comp === 2) {
    updateScore("lose");
    msgAlert("lose", player, comp);
}

/* Scissors Conditions */
if (player === 2 && comp === 0) {
    updateScore("lose");
    msgAlert("lose", player, comp);
}

if (player === 2 && comp === 1) {
    updateScore("win");
    msgAlert("win", player, comp);
}
}