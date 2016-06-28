//In this example, the if statement is checking if the value currently held in a variable called score is 50 or more.

var score = 75; //Score
var msg; //Score

if (score >= 50) { //If score is 50 or higher
  msg = 'Congratulations!';
  msg += ' Proceed to the next round. ';
}

var el = document.getElementById('answer');
el.textContent = msg;

//In this case, the statement evaluates to true (because the score us 75, which is greater than 50). Therefore, the contents of the statements within the subsequent code block are run, creating a message that congratulates the user and tells them to proceed. 