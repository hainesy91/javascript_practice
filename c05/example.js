console.log('Hello World');

var el = document.getElementById('shoppingList');

var one = document.getElementById('one').textContent;

//Create a new element and store it in a variable
var newEl = document.createElement('li');

//Create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

//Attach the new text node to the element
newEl.appendChild(newText);