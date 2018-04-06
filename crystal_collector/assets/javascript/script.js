$(document).ready(function() {

//Global Vars (including numbers)
var pictureTotal = 0;
var wins = 0;
var losses = 0;
//var randomNumber; --> Replaced below

    //Random Number To Guess (135 (as you subtract 1) + 16 (as we want min 15 due to random, add 1 to do grand total 150)) - At Page Load/Reload
var randomNumberGen = Math.floor((Math.random() * 135) + 16);
console.log("Random Number Gen: " + randomNumberGen);

    //Random Number Per Image - At Page Load/Reload
var cartoon1RandomNumberGen = Math.floor((Math.random() * 16) + 1);
console.log("Cartoon 1: " + cartoon1RandomNumberGen);
var cartoon2RandomNumberGen = Math.floor((Math.random() * 16) + 1);
console.log("Cartoon 2: " + cartoon2RandomNumberGen);
var cartoon3RandomNumberGen = Math.floor((Math.random() * 16) + 1);
console.log("Cartoon 3: " + cartoon3RandomNumberGen);
var cartoon4RandomNumberGen = Math.floor((Math.random() * 16) + 1);
console.log("Cartoon 4: " + cartoon4RandomNumberGen);

//Displayed Values
$('#randomNumber').text(randomNumberGen);
$('#winScore').text(wins);
$('#lossScore').text(losses);

//Winning (Win)
function winning() {
    $(function() {
        $("#dialogWinning").dialog();
      });
    wins++;
    $('#winScore').text(wins);
    gameRestart();
};

//Stay Positive (Loss)
function lossing() {
    $(function() {
        $("#dialogLossing").dialog();
      });
    losses++;
    $('#lossScore').text(losses);
    gameRestart();
};

//Game Restart
function gameRestart() {
    randomNumberGen;
    console.log("Random Number Gen: " + randomNumberGen);
    cartoon1RandomNumberGen;
    $('#randomNumber').text(randomNumberGen);
    console.log("Cartoon 1: " + cartoon1RandomNumberGen);
    cartoon2RandomNumberGen;
    console.log("Cartoon 2: " + cartoon2RandomNumberGen);
    cartoon3RandomNumberGen;
    console.log("Cartoon 3: " + cartoon3RandomNumberGen);
    cartoon4RandomNumberGen;
    console.log("Cartoon 4: " + cartoon4RandomNumberGen);
    pictureTotal = 0;
};

//Click Events


});