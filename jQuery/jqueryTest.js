if (jQuery) {

	// $("div").css("background", "purple");
	// $("div.highlight").css("width", "100px");
	// $("div#third").css("border", "10px solid orange");
	// $("div:first-of-type").css("color", "pink");
	
	// $("button#fadeOut").on("click", function() {
	// 	$("div").fadeOut(5000, function() {
	// 		$(this).remove();
	// 		console.log("fadeOut is really finished");
	// 	});
	// 	console.log("is fadeOut really finished?");
	// });

	// $("button#fadeOut").on("click", function() {
	// 	$("div").fadeIn(5000, function() {
	// 		console.log("fadeIn is really finished");
	// 	});
	// });

	// $("button#fadeOut").on("click", function() {
	// 	$("div").fadeToggle(5000, function() {
			
	// 	});
	// });

	// $("button#fadeOut").on("click", function() {
	// 	$("div").slideDown(5000, function() {
			
	// 	});
	// });

	// $("button#fadeOut").on("click", function() {
	// 	$("div").slideUp(5000, function() {
			
	// 	});
	// });

	$("button#fadeOut").on("click", function() {
		$("div").slideToggle(5000, function() {
			// $(this).remove();
		});
	});

	// jQuery methods test
	console.log($("h1").text());
	// $("h1").text("This is h1 text");
	// $("h1:first-of-type").on("click", function() {
	// 	$("h1").css("color", "purple");
	// });

	// $("h1").on("click", function() {
	// 	$("h1").css("color", "purple");
	// }); //any h1 is clicked then all h1 is chanaged

	$("h1").on("click", function() {
		$(this).css("color", "blue");
	});
	
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

	// $("input").attr("type", "color");
	// $("input").attr("type", "checkbox");
	// $("input").attr("type", "text");
	// $("input").val("");
	// $("input").val("aaaaa");
	// $("input").keypress(function() {
	// 	console.log("key is pressed");
	// });

	// $("input").keypress(function(event) {
	// 	console.log(event); //focus on charCode, keyCode, which 

	// 	if (event.which === 13) {
	// 		alert("Enter key is pressed");
	// 	};
	// });

	$("input").on("keypress", function(event) {
		console.log(event); //focus on charCode, keyCode, which 

		if (event.which === 13) {
			alert("Enter key is pressed");
		};
	});

	$("select").val();

	// $("h1").addClass("correct");
	// $("h1").removeClass("correct");
	// $("li").addClass("wrong");
	// $("li").removeClass("wrong");
	// $("li").addClass("correct");
	$("li").toggleClass("correct");
	// $("li").first().toggleClass("done");
	// $("li").toggleClass("done");

	$("button").click(function() {
		// alert("button is clicked");
		// $(this).css("background", "pink") // $(this) is jQuery object
		var btn = $(this).text();
		alert(btn + " is clicked");
	});

	$("button").on("mouseenter", function() {
		$(this).css("font-weight", "bold");
	});

	$("button").on("mouseleave", function() {
		$(this).css("font-weight", "normal");
	});

} else{
	alert("jQuery is NOT loaded");
};