$(document).ready(function(){

	$('.nav li').hover(addBlack, removeBlack);

	function addBlack(){
	$(this).children('a').addClass('black');
	}
	function removeBlack(){
		$(this).children('a').removeClass('black');
	}
	$('.equal').matchHeight();
	$('.thumbs').hover(function(){
		alert('sda');
	});
	//$('.fa-bars').click(function(){
		/*if($('.aside').hasClass('hidden-sm')) {
		$('.aside').removeClass('hidden-sm').addClass('animated slideInLeft');	
	}
	else{
		$('.aside').addClass('animated slideOutLeft' ).addClass('hidden-sm');
	}*/
	
		/*if($('.aside').not('.hidden-sm')){
			$('.aside').addClass('animated slideOutLeft' ).addClass('hidden-sm');
		}else{
			$('.aside').removeClass('hidden-sm').addClass('animated slideInLeft');
		}
		});*/
	$('.fa-bars').sidr({
      name: 'artem',
      source: '.aside',
      displace:false,
      speed:400
    });

	$(document).on("click", function () {
$.sidr('close', 'artem');

});


});
