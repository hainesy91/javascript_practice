//Create variables for the welcome message
var greeting = 'Howdy ';
var name = 'Chris';
var message = '. Please check your order:';

//Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an ID of greeting
var el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;

//Get the element that has an ID of userSign and then update its content
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

