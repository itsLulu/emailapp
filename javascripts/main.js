// type something here

var browserheight = window.innerHeight;
var browserwidth = window.innerWidth;

$('#emailbox').height(browserheight);

//get mail box
$('#nav_mailbox').click(function(){
	$('#emailbox').toggleClass('slideleft');
	$('#nav-icon1').toggleClass('rotateicon');
});

//get mail list
$('#nav_maillist').click(function(){
	$('#emaillist').toggleClass('slideleft');
	$('#nav-icon2').toggleClass('rotateicon');
});

var emaillist = $('#emaillist');
	
//show email content
$('.emaillist_listitem').click(function(){
	if(browserwidth <= '630'){
		emaillist.toggleClass('slideleft');
	}
});

//star an email
$('.star').click(function(){
	$(this).toggleClass('stared');
});

//inbox - current selected 
$('#inbox').click(function(){
	$('#emailbox').toggleClass('slideleft');
});