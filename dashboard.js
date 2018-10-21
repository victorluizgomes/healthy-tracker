
(function() {
	"use strict";

	window.onload = function() {
		calculateQuestions();

		var add = document.getElementById("add");
		add.onclick = addQuestion;

		var remove = document.getElementById("remove");
		remove.onclick = removeQuestion;
	}

	window.onclick = function() {

		var calculatebutton = document.getElementsByClassName("buttons");
		for(var i = 0; i < calculatebutton.length; i++) {
			calculatebutton[i].onclick = calculateQuestions;
		}
		calculateQuestions();

		var add = document.getElementById("add");
		add.onclick = addQuestion;

		var remove = document.getElementById("remove");
		remove.onclick = removeQuestion;
		
	};

	function addQuestion() {
		var mainDiv = document.getElementById("editable");
		var img = document.createElement("p");
		img.className = "questions";
		img.innerHTML = "Add a question here!";
		mainDiv.appendChild(img);
	}

	function removeQuestion() {
		var mainDiv = document.getElementById("editable");
		mainDiv.removeChild(mainDiv.lastChild);
		mainDiv.removeChild(mainDiv.lastChild);
	}

	function calculateQuestions(){
		
		var points = 0;
		var yesButtons = document.getElementsByClassName("points");
		for(var i = 0; i < yesButtons.length; i++) {
			if(yesButtons[i].checked) {
				points = points + 1;
			}
		}

		points = ((points / 3) * 100);
		points = points.toFixed(2);
		document.getElementById("scoreDisplay").innerHTML = "You have achieved " + points + "% <br /> of your goals today";
	}
	
	
})();
	

