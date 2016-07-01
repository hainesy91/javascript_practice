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

//Inside the code block there are two statements. The first statement uses += operator, which is used to add new content to the message variable. Each time the loops runs, a new calculation and link break is added to the end of the message being stored in it. So += works as a shorthand for writing msg = msg + 'new msg'

//The second statement increments the counter variable by one. (This is done inside the loop rather than with the condition).

//When the loop has finished, the interpreter goes to the next line of code, which writes the msg variable to the page.

//In this example, the condition specifies that the code should run nine times. A more typical use of a while loop would be when you do not know how many times you want the code to run. It should continue to run as long as a condition is met.