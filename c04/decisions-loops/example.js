var table = 3;  //Unit of table
var operator = 'addition'; //Type of calculation (defaults to addition)
var i = 1; //Set counter to 1
var msg = ''; //Message

if (operator === 'addition') { //If the operator variable says addtion
  while (i < 11) { //While counter is less than 11
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />'; //Calculation
    i++; //Add one to the counter
  }
} else { //Otherwise
  while (i < 11) { //While counter is less than 11
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; //Calculation
    i++; //Add one to the counter
  }
}

//Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg; 

//The if statement checks whether the value of the variable called operator is addition. If it is, it uses a while loop to perform the calculations and stores the result in a variable called msg.

//If you change the value of the operator variable to anything other than addition, the conditional statement will selecte set of statements. These also contain a while loop, but this time it will perform multiplication rather than addition.

//When one of the loops has finished running, the last two lines of the script select the element whose id attribute has a value of blackboard, and updates the page within the content of the msg variable.