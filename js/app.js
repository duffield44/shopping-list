$(document).ready(function() {
	

	/* Allows Add Button to be used as an submit button for input field */
	$('.add').click(function () {
		postItem();			
	})

	/* Appends value of input field to the bottom of div.list in a p.not-checked */
	function postItem() {
		var value = $('.input').val();
		$('.list').append("<p class='not-checked'><i class='fa fa-check'></i>" + value + "<i class='fa fa-times'></p>");
	}

});

/* Allows Reset List Button to remove all list items */
$(document).on("click", ".reset", function () {
	$('.list').empty();
});







	