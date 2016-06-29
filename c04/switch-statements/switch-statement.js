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