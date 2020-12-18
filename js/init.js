// slider
(function () {
    var $example = $('#slider');
    var frame = $example.find('.container')[0];
    var offset = $example.offset();
    var motio = new Motio(frame, {
        fps: 30,
        bgWidth: 1024,
        bgHeight: 1024
    });

    $example.on('mouseenter mouseleave', function (event) {
        if (event.type === 'mouseenter') {
            motio.play();
        } else {
            motio.pause();
        }
    });

    $(window).on('resize', function () {
        offset = $example.offset();
    });

    $example.on('mousemove', function (event) {
        motio.set('speedX', event.pageX - offset.left - motio.width / 2);
        motio.set('speedY', event.pageY - offset.top - motio.height / 2);
    });
}());


/* // плавне зникання сигнатури
$(window).on('scroll', function() {
	var percent = 0.003;

	$('#slider h3').css({
		opacity: 1 - $(window).scrollTop() * percent
	})
}); */