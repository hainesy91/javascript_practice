console.log('Hello Chris');

//A for loop is often used to loop through items in an array. In this example, the scores for each round of a test are stored in an array called scores.

var scores = [24, 32, 17]; //Array of scores
var arrayLength = scores.length; //Items in array
var roundNumber = 0; //Current Round
var msg = ''; //Message
var i; //Counter

//Loop through the items in the array
for (i = 0; i < arrayLength; i++) {
  //Arrays are zero based (so 0 is round 1)
  //Add 1 to the current round
  roundNumber = (i + 1);
  //Write the current round to the message
  msg += 'Round ' + roundNumber + ': ';
  //Get the score from the scores array
  msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;