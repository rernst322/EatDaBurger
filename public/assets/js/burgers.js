
$(function() {
	$(".change-devoured").on("click", function(event){
		var id = $(this).data("id");
		var newDevour = $(this).data("newdevour");

		var devourIt = {
			devoured: newDevour
		};
		//console.log(this);

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devourIt
		}).then(
		function(){
			console.log("changed devoured state to", newDevour);
			location.reload();
		}
	);

	});

	$(".create-form").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burg").val().trim(),
			devoured: 0
		};
		$.ajax("/api/burgers", {
	//$.ajax("/api/burgers", {
		type: "POST",
		data: newBurger
	}).then(
	function(){
		console.log("added a new burger" + newBurger);
		location.reload();
	}
	);
	});

}); 