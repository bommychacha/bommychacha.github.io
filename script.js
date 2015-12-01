//A $( document ).ready() block.

$(document).ready(function() {
 
 

$("#pictureChange").click(function() {
	$("#pairGenerator").toggle();
	$("#pairGenerator").attr("src","pair_generator.jpg");
}, function() {
	$("#pairGenerator").toggle();
	$("#pairGenerator").attr("src","toast-logo.png");


});

$("#profilepic").click(function() {
	$("#profilepic").animate({
		width: "450px",
		height: "450px",
	}, 5000);
  });



})
