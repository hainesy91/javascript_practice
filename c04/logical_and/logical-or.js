//Here is the same test but this time using the logical OR operator to find out if the user has passed at least one of the two rounds. If they pass just one round they do not need to retake the test.

var score1 = 8; //Round 1 score
var score2 = 8; //Round 2 score 
var pass1 = 6; //Round 1 pass mark
var pass2 = 6; //Round 2 pass mark

//Check whether the user passed one of the two rounds, store the result in a variable
var minPass = ((score1 >= pass1) || (score2 >= pass2));

//Create Message
var msg = 'Resit Required ' + !minPass;

//Write the message into the page
var el = document.getElementById('answer2');
el.textContent = msg;