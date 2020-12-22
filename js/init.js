
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10 && $(window).width()<777) {
            $('#nav').addClass('fixed');
        } else {
            $('#nav').removeClass('fixed');
        }
    }); 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });    
});


$('#up').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
});