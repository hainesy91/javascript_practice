//Adding Items to Start And End of List
var list = document.getElementsByTagName('ul')[0]; //Get the ul element

//Add New Item to end of List
var newItemLast = document.createElement('li'); //Create element
var newTextLast = document.createTextNode('cream'); //Create Text node
newItemLast.appendChild(newTextLast); //Add Text Node to Element
list.appendChild(newItemLast); //Add Element to end of List

//Add New Item to Start of List
var newItemFirst = document.createElement('li'); //Create Element
var newTextFirst = document.createTextNode('kale'); //Create Text Node
newItemFirst.appendChild(newTextFirst); //Add text node to element
list.insertBefore(newItemFirst, list.firstChild); //Add element to the list

