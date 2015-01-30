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

/* Delete list items by clicking on X */
$(document).on("click", ".fa-times", function () {
	$(this).closest('p').fadeOut(120);
});

/* Allows user to check items off list by clicking check mark */
$(document).on("click", ".fa-check", function () {
	$
	$(this).closest('p').removeClass("not-checked").addClass("checked");
	$(this).removeClass("fa-check").addClass("fa-circle-o");
});

/* Allows user to uncheck items */
$(document).on("click", ".fa-circle-o", function () {
	$(this).closest('p').removeClass("checked").addClass("not-checked");
	$(this).removeClass("fa-circle-o").addClass("fa-check");
});










	