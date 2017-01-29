'use strict';
// Variable settings and DOM references
var input = '';
var button = document.getElementById('create-button');
var output = document.getElementById('new-card');

////// This is the dynamic event handler
let body = document.querySelector('body');

// Function to create card elements on DOM
var printCard = function(input) {
  var cardDiv = document.createElement('div');
  var newCard = `<p class="the-card">${input}</p>
  						  <button class="delete">Delete</button>`;
  cardDiv.innerHTML += newCard;
  output.appendChild(cardDiv);
}

// Function to call dynamic delete function
function callDelete(event){
	if (event.target.className === "delete") {
		deleteMessage(event);
	}
}

// Dynamic delete function
var deleteMessage = function(event){
		let messageToDelete = event.target.parentNode;
		output.removeChild(messageToDelete);
	}

// Button even listener calls card making function
button.addEventListener('click', function() {
  input = document.getElementById('card-input').value;;
  printCard(input);
});

// Event listener on body to call the delete function on dynamic delete 
body.addEventListener('click', callDelete);
