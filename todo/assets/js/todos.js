// check off
// $("li").on("click", function() {
// 	$(this).toggleClass("completed"); 
// }); //this has soem buggy, new added ToDo item can't get "click listener"

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed"); 
}); // solved the above problem


// delete clicked ToDo item
// $("span").on("click", function(event){
// 	// $(this).parent().remove();
// 	// $(this).parent().fadeOut();
// 	// $(this).parent().fadeOut().remove();
// 	$(this).parent().fadeOut(500, function() { //here "this" object is "span"
// 		$(this).remove(); //now here "this" object is "li", cause of parent()
// 	})
// 	event.stopPropagation();
// }); //this has soem buggy, new added ToDo item can't get "click listener"

$("ul").on("click", "span", function(event){
	// $(this).parent().remove();
	// $(this).parent().fadeOut();
	// $(this).parent().fadeOut().remove();
	$(this).parent().fadeOut(500, function() { //here "this" object is "span"
		$(this).remove(); //now here "this" object is "li", cause of parent()
	})
	event.stopPropagation();
}); // solved the above problem

// add ToDo item by input field
$("input[type='text'").on("keypress", function(event) {
	//console.log(event);
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText + "</li>")
	};
}); 