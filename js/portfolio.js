$(document).ready(function () {
    $('div.fadeIn').fadeIn(1000).removeClass('fadeIn');

    $('#sportify').hover(function(){
    	$(this).stop().animate({opacity: .4}, 200);
    $('.text_sportify').removeClass('hide_sportify');
    	}, function(){
    		$(this).stop().animate({opacity: 1}, 500);
    		$('.text_sportify').addClass('hide_sportify');
    });

    $('#weatherware').hover(function(){
    	$(this).stop().animate({opacity: .4}, 200);
    $('.text_weatherware').removeClass('hide_weatherware');
    	}, function(){
    		$(this).stop().animate({opacity: 1}, 500);
    		$('.text_weatherware').addClass('hide_weatherware');
    });

       $('#docker').hover(function(){
        $(this).stop().animate({opacity: .4}, 200);
    $('.text_docker').removeClass('hide_docker');
        }, function(){
            $(this).stop().animate({opacity: 1}, 500);
            $('.text_docker').addClass('hide_docker');
    });
});