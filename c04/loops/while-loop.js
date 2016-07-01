//Here is an example of a while loop. It writes out the 5 times table. Each time the loop is run, another calculation is written into the variable called msg.

//This loop will continue to run for as long as the condition in the parenthesis is true. That condition is a counter indicating that, as long as the variable i remains less than 10, the statements in the subsequent code block should run.

var i = 1; //Set counter to 1
var msg = ''; //Message

//Store 5 times table in a variable
while (i < 10) {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer2').innerHTML = msg;