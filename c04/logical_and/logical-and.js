//The logical AND is used to see if the user's score is greater than ot equal to the pass mark in both rounds of the test. The result is stored in a variable called passBoth

var score1 = 8; //Round 1 score
var score2 = 8; //Round 2 score 
var pass1 = 6; //Round 1 pass mark
var pass2 = 6; //Round 2 pass mark

//Check whether the user passed both rounds, store result in a variable
var passBoth = (score1 >= pass1) && (score2 >= pass2);

//Create message
var msg = 'Both rounds passed: ' + passBoth;

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;