if (jQuery) {

	$("div").css("background", "purple");
	$("div.highlight").css("width", "100px");
	$("div#third").css("border", "10px solid orange");
	$("div:first-of-type").css("color", "pink");

	// jQuery methods test
	console.log($("h1").text());
	$("h1").text("This is h1 text");
	
	console.log($("ul").text());

	console.log($("ul").html());

	console.log($("li").text());
	$("li").text("this li's text");
	$("li").html("<li>hacked LI</li><li>hacked LI1</li><li>hacked LI2</li>");

	console.log($("img").css("width"));
	$("img").css("width", "500px");

	console.log("image src : " + $("img").attr("src"));
	// want to change all image tag
	// $("img").attr("src", "http://aviationblog.dallasnews.com/files/2013/06/AAs-Tripp-plane.jpg");
	// want to change the 1st image tag
	$("img:first-of-type").attr("src", "http://aviationblog.dallasnews.com/files/2013/06/AAs-Tripp-plane.jpg");
	$("img").last().attr("src", "http://aviationblog.dallasnews.com/files/2013/06/AAs-Tripp-plane.jpg");
	$("img"). attr("src", "http://aviationblog.dallasnews.com/files/2013/06/AAs-Tripp-plane.jpg");

	$("input").attr("type", "color");
	$("input").attr("type", "checkbox");
	$("input").attr("type", "text");
	$("input").val("");
	$("input").val("aaaaa");

	$("select").val();

	// $("h1").addClass("correct");
	// $("h1").removeClass("correct");
	// $("li").addClass("wrong");
	// $("li").removeClass("wrong");
	// $("li").addClass("correct");
	$("li").toggleClass("correct");
	// $("li").first().toggleClass("done");
	// $("li").toggleClass("done");

} else{
	alert("jQuery is NOT loaded");
};