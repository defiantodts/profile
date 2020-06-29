$('.page').on('click', function (e) {
	const href = $(this).attr('href');
	const elementPage = $(href);
	$('body').animate({
		scrollTop: elementPage.offset().top - 50
	},1000, 'easeInOutExpo');
	e.preventDefault();
});

// animate aboutme section
$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.aboutme').offset().top - 400) {
		$('.aboutme .heading').each(function(i){
			setTimeout(function() {
				$('.aboutme .heading').eq(i).addClass('show');
			}, 500 * (i+1));
		});
		$('.aboutme .bio').addClass('show');
	}else{
		$('.aboutme .heading').removeClass('show');
		$('.aboutme .bio').removeClass('show');
	}
});


//animate skill & education section//


$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.main').offset().top - 220) {
		$('.pendidikan .school').each(function(i){
			setTimeout(function(){
				$('.pendidikan .school').eq(i).addClass('show');
			}, 500 * (i+1));
		});
		$('.pendidikan .year').each(function(i){
			setTimeout(function(){
				$('.pendidikan .year').eq(i).addClass('show');
			}, 500 * (i+1));
		});
		$('.skills .skill').each(function(i){
			setTimeout(function(){
				$('.skills .skill').eq(i).addClass('show');
			}, 500 * (i+1));
		});
			$('.skills .bar').each(function(i){
		setTimeout(function(){
			$('.skills .bar').eq(i).addClass('show');
		}, 500 * (i+1));
		});
	}else{
		$('.pendidikan .school').removeClass('show');
		$('.skills .skill').removeClass('show');
		$('.skills .bar').removeClass('show');
	}
});
// animate scroll portfolio section
$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.portfolio').offset().top - 400) {
		$('.portfolio .heading').addClass('show')
	}else{
		$('.portfolio .heading').removeClass('show');
	}
});
$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.portfolio').offset().top - 500) {
		$('.portfolio .card').each(function(i){
			setTimeout(function() {
				$('.portfolio .card').eq(i).addClass('show');
			}, 500 * (i+1));
		});
	}else{
		$('.portfolio .card').removeClass('show');
	}
});
// Contact animate scroll section
$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.contact').offset().top - 200) {
		$('.contact .heading').addClass('show')
	}else{
		$('.contact .heading').removeClass('show');
	}
});
$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.contact').offset().top - 200) {
		$('.contact .biodata').addClass('show')
	}else{
		$('.contact .biodata').removeClass('show');
	}
});
$(window).scroll(function() {
	let pageScroll = $(this).scrollTop();
	if (pageScroll > $('.contact').offset().top - 200) {
		$('.contact .message').addClass('show')
	}else{
		$('.contact .message').removeClass('show');
	}
});