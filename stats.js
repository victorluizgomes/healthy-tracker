(function() {
	"use strict";

	window.onload = function() {
		var daily = document.getElementById("daily");
		daily.onclick = displayDaily;

		var total = document.getElementById("total");
		total.onclick = displayTotal;

	}

	function displayDaily() {
		var div = document.getElementById("img-place");
		while (div.firstChild) {
		    div.removeChild(div.firstChild);
		}
		var img = document.createElement("img");
		img.src = "graph_daily.svg";
		img.className = "graph";

		div.appendChild(img);
	}


	function displayTotal() {
		var div = document.getElementById("img-place");
		while (div.firstChild) {
		    div.removeChild(div.firstChild);
		}
		var img = document.createElement("img");
		img.src = "graph_total.svg";
		img.className = "graph";

		div.appendChild(img);
	}
	
})();
	

