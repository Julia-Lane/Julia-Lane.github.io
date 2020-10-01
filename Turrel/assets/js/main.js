$(document).ready(function(){
	console.log('hello world');



	// $('.btn-menu').click(function(){
	// 	$('.box').addClass('hide');
	// 	$('.box.menu').removeClass('hide');
	// });

		$('.btn-menu').click(function(){
		$('.inspo').toggleClass('hide');
		$('.inspo.menu').toggleClass('hide');
	});


});
