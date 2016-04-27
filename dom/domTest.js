console.log(document.URL);
console.log(document.links);
console.log(document.body);
console.log(document.head);



var idName = "highlight";
var tag = document.getElementById(idName);
console.log(tag);
// tag.style.color = "orange"; //do not this
//tag.classList.add("redtext"); // do this !!! use CSS
tag.classList.toggle("coloredtext");
//tag.classList.toggle("redtext");
console.log(tag.textContent); //returns a string all of the text
// tag.textContent = "textContent text"

console.log(tag.innerHTML);
tag.innerHTML = "<strong>innerHTML</strong>";

var clsName = "bolded";
var clsTag = document.getElementsByClassName(clsName);
console.log(clsTag.length);
for (var i = 0; i < clsTag.length; i++) {
	console.log(clsTag[i]);
};


var tagName = "li"
// var tagName = "h1"
// var tagName = "body"
// var tagName = "head"
var tags = document.getElementsByTagName(tagName);
console.log(tags.length);
for (var i = 0; i < tags.length; i++) {
	console.log(tags[i]);
};


// querySelector returns very the 1st value even if it has several items
var idName = "#" + idName;
var className = "." + clsName;
var tags = document.querySelector(tagName); //li a.special
console.log("===============");
console.log(tags);


//////////////////
var tags = document.querySelectorAll(className); //li a.special
console.log("===============");
console.log(tags.length);
for (var i = 0; i < tags.length; i++) {
	console.log(tags[i]);
};

/////////////////// manipluating attribute : getAttribute, setAttribute
var element = "a";
var tags = document.querySelector(element);
console.log(tags.getAttribute("href"));
tags.setAttribute("href", "http://www.naver.com");
tags.textContent = "Go to Naver";


///////////////////

// dom event test
var button = document.querySelector("button");
// var paragraph = document.querySelector("p");
button.addEventListener("click", function() {
	// paragraph.textContent = "button is clicked";
	// alert("button is clicked");
	// document.body.style.background = "purple";
	document.body.classList.toggle("purple");
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.style.color = "red";
	})
};
