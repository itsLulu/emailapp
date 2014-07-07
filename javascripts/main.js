// type something here

var browserheight = window.innerHeight;

console.log(browserheight);

$('#emailbox').height(browserheight);


/*get mail box*/
$('.nav-btn').click(function(){
	console.log('slide');
	$('#emailbox').toggleClass('slideleft');
});