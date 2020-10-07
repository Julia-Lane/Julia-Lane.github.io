$(document).ready(function(){
	console.log('hello world');

	$('.btn-fruit').click(function(){
		$('.item').addClass('hide');
		$('.item.fruit').removeClass('hide');
	});

	$('.btn-death').click(function(){
		$('.item').addClass('hide');
		$('.item.death').removeClass('hide');
	});

	$('.btn-spirit').click(function(){
		$('.item').addClass('hide');
		$('.item.spirit').removeClass('hide');
	});	

	$('.btn-love').click(function(){
		$('.item').addClass('hide');
		$('.item.love').removeClass('hide');
	});

	$('.btn-note').click(function(){
		$('.item').addClass('hide');
		$('.item.note').removeClass('hide');
	});	

	$('.btn2-home').click(function(){
		$('.item').removeClass('hide');
	});	
});