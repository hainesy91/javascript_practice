//Here you can see that an if...else statement allows you to provide two sets of code.
//1. One set if the condition evaluates to true
//2. Another set if the condition is false

var pass = 50; //Pass Mark
var score = 75; //Current Score
var msg; //Message

//Select Message to write based on the score
if (score >= pass) {
  msg = 'Congratulations, you Passed! ';
} else {
  msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;