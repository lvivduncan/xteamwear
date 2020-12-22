    // fixed menu
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10 && $(window).width()<777) {
            $('#nav').addClass('fixed');
        } else {
            $('#nav').removeClass('fixed');
        }
    }); 

    // to up button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });

    // mobile menu button
    $('#menu-button').on('click', function(){
        $('#nav').addClass('active');
        $('body').css('position', 'fixed');
        $('#menu-close-button').css('display','block');
    });

    // close mobile menu
    $('#menu-close-button').on('click',function(){
        $('#nav').removeClass('active');
        $('body').css('position', '');
        $('#menu-close-button').css('display','none'); 
    });


$('#up').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
});