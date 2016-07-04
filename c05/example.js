console.log('Hello World');

var el = document.getElementById('shoppingList');

var one = document.getElementById('one').textContent;

//Create a new element and store it in a variable
var newEl = document.createElement('li');

//Create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

//Attach the new text node to the element
newEl.appendChild(newText);

//Find the position where the new element should be added
var position = document.getElementsByTagName('ul')[0];

//Insert the new element into it's position
position.appendChild(newEl);

//The text node is added to the new element node using appendChild(). The getElementsByTagName() method selects the position in the DOM tree to insert the new element (the first <ul> element in the page). Finally, appendChild() is used again, this time to insert the new element and its content into the DOM tree as the last child.