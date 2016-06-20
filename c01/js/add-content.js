//This script displays a greeting to the use based upon the current time.
// It is an example from JavaScript & jQuery book.

var today = new Date(); //Create a new date object
var hourNow = today.getHours(); //Find the current time
var greeting;

//Display the appropriate greeting based on the current time
if (hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}


//Document is a javascript object. .write() is a javascript method. Everything within the parenthesis are the paramters.
document.write('<h3>' + greeting + '</h3>');

