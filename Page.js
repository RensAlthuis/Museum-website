$( document ).ready(function(){
    navbarFix();
    smoothScrolling();
});


$( window ).resize(function(){
    navbarFix();
});

function navbarFix(){
    $(window).off('.affix')
    $('.navbar').removeData('bs.affix').removeClass('affix affix-top affix-bottom')
    if(window.innerWidth > 768){
        $('.navbar').affix({ offset: $('.navbar').offset().top})
    }
    if(window.innerWidth > 768 && window.innerWidth < 992){
        $('.nav, a').css('padding-left','15px');
        $('.nav, a').css('padding-right','15px');
        console.log($('.nav a').css('padding-right'));
    }else{
        $('.nav, a').css('padding','');            
    }
}

function smoothScrolling(){
    	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 95
	    }, 900, 'swing', function () {
	        window.location.hash = target - 95;
	    });
	});
}