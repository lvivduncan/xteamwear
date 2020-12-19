
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('#up').fadeIn();
        $('#nav').addClass('fixed');
    } else {
        $('#up').fadeOut();
        $('#nav').removeClass('fixed');
    }
});

$('#up').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
});