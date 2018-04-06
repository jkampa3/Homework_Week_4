$(document).ready(function() {

//Global Vars (including numbers)
var pictureTotal = 0;
var wins = 0;
var losses = 0;
//var randomNumber; --> Replaced below

    //Random Number To Guess (135 (as you subtract 1) + 16 (as we want min 15 due to random, add 1 to do grand total 150)) - At Page Load/Reload
var randomNumberGen = Math.floor((Math.random() * 136) + 15);
console.log("Random Number Gen: " + randomNumberGen);

    //Random Number Per Image - At Page Load/Reload - Set Number between 1-15
var cartoon1RandomNumberGen = Math.floor((Math.random() * 15) + 1);
console.log("Cartoon 1: " + cartoon1RandomNumberGen);
var cartoon2RandomNumberGen = Math.floor((Math.random() * 15) + 1);
console.log("Cartoon 2: " + cartoon2RandomNumberGen);
var cartoon3RandomNumberGen = Math.floor((Math.random() * 15) + 1);
console.log("Cartoon 3: " + cartoon3RandomNumberGen);
var cartoon4RandomNumberGen = Math.floor((Math.random() * 15) + 1);
console.log("Cartoon 4: " + cartoon4RandomNumberGen);

//Displayed Values
$('#randomNumber').text(randomNumberGen);
$('#winScore').text(wins);
$('#lossScore').text(losses);

//Winning (Win)
function winning() {
    //alert("Winner!");
    $("<div><img src='assets/images/Winning.jpg'></div>").dialog();
    //$(function() {$("#dialogWinning").dialog();});
    wins++;
    $('#winScore').text(wins);
    gameRestart();
};

//Stay Positive (Loss)
function lossing() {
    //alert("Loser!");
    $("<div><img src='assets/images/Lossing.jpg'></div>").dialog();
    //$(function() {$("#dialogLossing").dialog();});
    losses++;
    $('#lossScore').text(losses);
    gameRestart();
};

//Game Restart
function gameRestart() {
    randomNumberGen = Math.floor((Math.random() * 135) + 16);
    //randomNumberGen; <--Pulled Original # from Inital Page Load Due To Variable
    $('#randomNumber').text(randomNumberGen);
    console.log("Random Number Gen: " + randomNumberGen);
    cartoon1RandomNumberGen = Math.floor((Math.random() * 15) + 1);
    //cartoon1RandomNumberGen; <--Pulled Original # from Inital Page Load Due To Variable
    console.log("Cartoon 1: " + cartoon1RandomNumberGen);
    cartoon2RandomNumberGen = Math.floor((Math.random() * 15) + 1);
    //cartoon2RandomNumberGen; <--Pulled Original # from Inital Page Load Due To Variable
    console.log("Cartoon 2: " + cartoon2RandomNumberGen);
    cartoon3RandomNumberGen = Math.floor((Math.random() * 15) + 1);
    //cartoon3RandomNumberGen; <--Pulled Original # from Inital Page Load Due To Variable
    console.log("Cartoon 3: " + cartoon3RandomNumberGen);
    cartoon4RandomNumberGen = Math.floor((Math.random() * 15) + 1);
    //cartoon4RandomNumberGen; <--Pulled Original # from Inital Page Load Due To Variable
    console.log("Cartoon 4: " + cartoon4RandomNumberGen);
    pictureTotal = 0;
    $('#pictureTotal').text(pictureTotal);
};

//Click Events
//Cartoon1
$('.Cartoon1').on ('click', function() {
    pictureTotal = pictureTotal + cartoon1RandomNumberGen;
    console.log("New pictureTotal= " + pictureTotal);
    $('#pictureTotal').text(pictureTotal); 
        if (pictureTotal == randomNumberGen){
            winning();
        }
        else if ( pictureTotal > randomNumberGen){
            lossing();
        }   
  });  

  //Cartoon2
$('.Cartoon2').on ('click', function() {
    pictureTotal = pictureTotal + cartoon2RandomNumberGen;
    console.log("New pictureTotal= " + pictureTotal);
    $('#pictureTotal').text(pictureTotal); 
        if (pictureTotal == randomNumberGen){
            winning();
        }
        else if ( pictureTotal > randomNumberGen){
            lossing();
        }   
  }); 

  //Cartoon3
$('.Cartoon3').on ('click', function() {
    pictureTotal = pictureTotal + cartoon3RandomNumberGen;
    console.log("New pictureTotal= " + pictureTotal);
    $('#pictureTotal').text(pictureTotal); 
        if (pictureTotal == randomNumberGen){
            winning();
        }
        else if ( pictureTotal > randomNumberGen){
            lossing();
        }   
  }); 

  //Cartoon4
$('.Cartoon4').on ('click', function() {
    pictureTotal = pictureTotal + cartoon4RandomNumberGen;
    console.log("New pictureTotal= " + pictureTotal);
    $('#pictureTotal').text(pictureTotal); 
        if (pictureTotal == randomNumberGen){
            winning();
        }
        else if ( pictureTotal > randomNumberGen){
            lossing();
        }   
  }); 


});

//Improvement:
// - Print final total (regardless of win/loss) to screen before pop-up
// - Change out current image assignment for for loop to array: https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100. 
//      (With indexOf, can avoid having duplicate numbers added)
// - Reposition images at restart?