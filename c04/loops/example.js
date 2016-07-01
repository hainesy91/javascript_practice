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

//Thw total number of items in the array is sored in a variable called arrayLength. This number is obtained using the length property of the array.

//There are 3 more variables: roundNumber holds the round of the test; msg holds the message to display; i is the counter (declared outside of the loop).

//The loops starts with the for keyword, then contains the condition inside the parenthesis. As long as the counter is less than the total number of items in the array, the contents of the curly braces will continue to run. Each time the loops runs, the round number is increased by 1.

//Inside the curly braces are rules that write the round number and the score to the msg variable. The variables declared outside of the loop are used within the loop.

//The msg variable is then written into the page. It contains HTML so the innerHTML property is used to do this.  