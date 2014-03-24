/* Nice Scroll */
$(function() {
	//full height
	vpw = $(window).width();
	vph = $(window).height();
	//srnw = $(screen).width();
	//srnh = $(screen).height();

	var minWidth = 980, minHeight = 691;
	
	if(vpw < minWidth)
	{
		ratio = minWidth / vpw;
		vpw = minWidth;
		$('body').width(vpw);
		
		//if(vph < minHeight)
		vph = vph * ratio;
	}
		
	
	//alert('test=' + vpw + ', ' + vph);
	
	$('.full-page').height(vph);
	$('.full-page').width(vpw);
	//.width(vpw);
	//$('#greenbg').width(vpw).refresh();
	$('.parallax').height(vph);
	$('.parallax-text-container').height(vph);
	//$('.parallax-text-container').width(vpw);
});


$("html").niceScroll({
	zindex : 99999,
	cursorborder : "1px solid #464646",
	horizrailenabled:false
});



//flexslider settings
//$(function() {
$(window).load(function() {
	//news
	var $flexslider = $('.center-nav-content-slider-2');
	$flexslider.flexslider({
		animation : "slide",
		slideshow : false,
		prevText : "",
		nextText : "",
		//slideToStart : 0,
		animationLoop : false,
		end : function(slider) {
			$('.flex-prev').show();
		},
		manualControls : ".flex-control-nav li",
		useCSS : false /* Chrome fix*/

	});
	//new financial
	var $flexslider = $('.center-nav-content-slider-3');
	$flexslider.flexslider({
		animation : "slide",
		slideshow : false,
		prevText : "",
		nextText : "",
		//slideToStart : 0,
		animationLoop : false,
		end : function(slider) {
			$('.flex-prev').show();
		},
		manualControls : ".flex-control-nav2 li",
		useCSS : false /* Chrome fix*/

	});
	//home
	$('.center-nav-home-slider').flexslider({
		animation : "fade",
		slideshow : true,
		useCSS : false,
		prevText : "",
		nextText : "",
		animationLoop : true,
		controlNav : false,
		directionNav : false,
	});
	//letter
	$('.center-nav-content-slider').flexslider({
		animation : "slide",
		slideshow : false,
		useCSS : true,
		prevText : "",
		nextText : "",
		animationLoop : false,

		end : function(slider) {
			$('.flex-prev').show();
		},
		start : function(slider) {
			$('.total-slides').text(slider.count);
			$('.current-slide').text(slider.currentSlide + 1);
		}
	});
	//growth
	$('.center-nav-content-slider-1').flexslider({
		animation : "slide",
		slideshow : false,
		useCSS : false,
		prevText : "",
		nextText : "",
		animationLoop : false,
		end : function(slider) {
			$('.flex-prev').show();
		},
		start : function(slider) {
			$('.total-slides').text(slider.count);
		},
		after : function(slider) {
			$('.current-slide').text(slider.currentSlide + 1);
		}
	});

	//test
	$('.test-flexslider').flexslider({
		animation : "slide",
		slideshow : false,
		manualControls : ".flex-control-nav li",
		useCSS : false, /* Chrome fix*/
		prevText : "",
		nextText : "",
		animationLoop : false,

		end : function(slider) {
			$('.flex-prev').show();
		},
		start : function(slider) {
			$('.total-slides').text(slider.count);
			$('.current-slide').text(slider.currentSlide + 1);
		}
	});

	//not being used
	// bottom nav slider, client say, testimonals, etc
	$('.bottom-nav-content-slider').flexslider({
		animation : "slide",
		slideshow : false,
		useCSS : false,
		prevText : "",
		nextText : "",
		directionNav : true,
		animationLoop : false,
	});

});
	

//$('#slide1, #home-1, #slide2, #slide3, #slide4, #slide5, #greenbg-solid').height(srnh);
//$('#slide1, #home-1, #slide2, #slide3, #slide4, #slide5, #greenbg-solid').height(srnw);
//window.onresize = function(event) {
//    $("#slide1, #home-1, #slide2, #slide3, #slide4, #slide5, #greenbg-solid").css("width", $(window).width());
//}
//$('#slide1').height(vph);
//.width(vpw);

/*var viewport = {
width  : $(window).width(),
height : $(window).height()
};

var deviceWidth = 0;
$(window).bind('resize', function () {
deviceWidth = $('[data-role="page"]').first().width());
}).trigger('resize');​​​*/

//can access dimensions like this:
//viewport.height

// Autoplay
/*setInterval(function() {
var $curr = $('#slideshow-wrap input[type=radio]:checked');
var $next = $curr.next('input[type=radio]:checked');
if(!$next.length) $next = $('#slideshow-wrap input[type=radio]').first();
$next.prop('checked', true);

}, 2000);

setInterval(function() {
var $curr = $('#slideshow-wrap-1 input[type=radio]:checked');
var $next = $curr.next('input[type=radio]:checked');
if(!$next.length) $next = $('#slideshow-wrap-1 input[type=radio]').first();
$next.prop('checked', true);

}, 2000);

setInterval(function() {
var $curr = $('#slideshow-wrap-2 input[type=radio]:checked');
var $next = $curr.next('input[type=radio]:checked');
if(!$next.length) $next = $('#slideshow-wrap-2 input[type=radio]').first();
$next.prop('checked', true);

}, 2000);

//active navigation

//$("#timeline-two li a").click(function() {
//  $("#timeline-two li a").not(this).removeClass("active");
//  $(this).toggleClass("active");
//});

$("#timeline-one li a").click(function() {
$("#timeline-one li a").not(this).removeClass("active");
$(this).toggleClass("active");
});
*/

//popover - share

//$('.share').popover({
//				html : true,
//				trigger : 'click',
//				placement : 'right',
//				content : function() {

//					return '<a target="_blank" href="' + $(this).data('fb') + '"><div class="fshare pull-left"></div></a><a target="_blank" href="' + $(this).data('tw') + '" class="left10 pull-right"><div class="tshare"></div></a>';

//				}
//});
$(".share").popover({
	html : true,
	trigger : 'click',
	container: 'body',
	content: "<a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=http://ar2013.prologisweb.com'><div class='fshare pull-left'></div></a><a target='_blank' class='left10' href='https://twitter.com/home?status=http://ar2013.prologisweb.com'><div class='tshare pull-right'></div></a>",
});

//** Back to top arrow

$(document).ready(function() {

	// hide #back-top first
	$("#back-to-top").hide();

	// fade in #back-top
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 700) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').click(function() {
			$('body,html').animate({
				scrollTop : 0
			}, 800);
			return false;
		});
	});
});

