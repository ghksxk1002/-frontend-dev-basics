var onTabClicked = function() {
	console.log("chlick!!" + this.innerText);

	//unselected
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length === 1) && (lisSelected[0].className = '');

	// select
	this.className = "selected";
}



var tabbox = {
	init: function() {
		window.addEventListener("load", this.onWindowLoad.bind(this));
	},
	onWindowLoad: function() {
		console.log("DOM loaded!");
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];

		var litab = ul.getElementsByTagName("li");

		for (var i = 0; i < litab.length; i++) {
			litab[i].addEventListener("click", this.onTabClicked);
		}


	},
	onTabClicked: function() {
		console.log("chlick!!" + this.innerText);

		//unselected
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = '');

		// select
		this.className = "selected";
	}

}