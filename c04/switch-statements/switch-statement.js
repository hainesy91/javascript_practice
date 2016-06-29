//In this example, the purpose of the switch statement is to present the user with a different message depending on which level they are at. The message is stored in a variable called msg.

var msg; //Message
var level = 2; //Level

//Determine message based on the level
switch (level) {
  case 1:
    msg = 'Good luck on the first test';
    break;

  case 2:
    msg = 'Second of three - keep going!';
    break;

  case 3:
    msg = 'Final round, almost there!';
    break;

  default:
  msg = 'Good Luck!';
  break;
}

var el = document.getElementById('answer');
el.textContent = msg;

//The variable called level contains a number indicating which level the user is on. This is then used as the switch value.(The switch value could also be an expression).
//In the following code block, there are 3 options for what the value of the level variable might be: the numbers: 1, 2 or 3.
//If the value of the level variable is the number 1, the value of the message variable is set to 'Good luck on the first test'. And so on for cases 2 and 3.
//If no match is found, then the value of the msg variable is set to 'Good Luck!'
//Each case ends with the break keyword which will tell the JavaScript interpreter to skip the rest of this code and continute onto the next.