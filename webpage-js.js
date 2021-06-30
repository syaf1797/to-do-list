var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}


function markAsDone(ev) {
	if (ev.target.tagName === "LI") {
		ev.target.classList.toggle("done");
	}
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = ""; 

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}
}


function AddListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function AddListAfterKeypress(event) { 
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		}
 
}

var i;
for (i = 0; i < list.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


button.addEventListener("click", AddListAfterClick);

input.addEventListener("keypress", AddListAfterKeypress);

ul.addEventListener("click", markAsDone);

