$(document).ready(function() {

//Global Vars (including numbers)
var pictureTotal = 0;
var wins = 0;
var losses = 0;
//var randomNumber; --> Replaced below

    //Random Number To Guess (135 (as you subtract 1) + 16 (as we want min 15 due to random, add 1 to do grand total 150))
var randomNumberGen = Math.floor((Math.random() * 135) + 16);
console.log("Random Number Gen: " + randomNumberGen);

    //Random Number Per Image
var cartoon1RandomNumberGen = Math.floor((Math.random() * 16) + 1);
var cartoon2RandomNumberGen = Math.floor((Math.random() * 16) + 1);
var cartoon3RandomNumberGen = Math.floor((Math.random() * 16) + 1);
var cartoon4RandomNumberGen = Math.floor((Math.random() * 16) + 1);

//Displayed Values
$('#randomNumber').text(randomNumberGen);
$('#winScore').text(wins);
$('#lossScore').text(losses);

//Winning

//Stay Positive

//Game Restart

//Click Events


});