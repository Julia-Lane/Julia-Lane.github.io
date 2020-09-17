$(document).ready(function(){
	console.log('hello world');

	$('.btn-status').click(function(){
		$('.item').addClass('hide');
		$('.item.status').removeClass('hide');
	});

	$('.btn-redundant').click(function(){
		$('.item').addClass('hide');
		$('.item.redundant').removeClass('hide');
	});

	$('.btn-anonymous').click(function(){
		$('.item').addClass('hide');
		$('.item.anonymous').removeClass('hide');
	});

	$('.btn-occasion').click(function(){
		$('.item').addClass('hide');
		$('.item.occasion').removeClass('hide');
	});

	$('.btn-home').click(function(){
		$('.item').removeClass('hide');
	});

	$('.square').click(function(){
		$(this).toggleClass('move');
	});



});
