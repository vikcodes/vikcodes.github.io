var stickyNav;

$(document).ready(function(){

	applyPreloader();
	randomFeature();
	applyHeader();
	applyNavigation(); 
	applyMailTo();
	applyResize();
	checkHash();
});

/* Preloader Function */
function applyPreloader() {
	setTimeout(function(){
        $('body').addClass('loaded');
    }, 1500);
}

function randomFeature() {
	features = ['Student, Programmer, Innovator',
				'The Second Most Interesting Man In The World'
				];
	max = features.length;
	i = Math.floor(Math.random() * max);
	result = features[i];

	$('#headline').text(result);

	$('.collapse-group').on('click', function() {
		if($(this).children('.collapse').hasClass('in')) {
			$(this).children('.in').removeClass('in');
		} else {
			$('.in').removeClass('in');
			$(this).children('.collapse').addClass('in');
		}

});

}

/* Header Function */
function applyHeader() {
	$('.jumbotron').css({ height: ($(window).height()) +'px' });
}	

/* Navigation Functions */
function applyNavigation() {
	forClicking();
	scrollSpy();
	stickyNavigation();
}

function forClicking(){
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();

		if( $( $.attr(this, 'href') ).length > 0 ) {
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}

		return false;
	});
}

function scrollSpy() {
	$('#navbar').on('activate.bs.scrollspy', function() {
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function stickyNavigation() {
	stickyNav = $('.scroll-down').offset().top + 20;
	$(window).on('scroll', function() {  
		stickyNavigation();  
	});  
	stickyNavigation();
}

function stickyNavigation() {         
	if($(window).scrollTop() > stickyNav) {   
		$('body').addClass('fixed');  
	} else {  
		$('body').removeClass('fixed');   
	}  
}

/* Mail To Function */
function applyMailTo(){
	$('a[href*=mailto]').on('click', function(e) {
		var lstrEmail = $(this).attr('href').replace('mailto:', '');
		lstrEmail = lstrEmail.split('').reverse().join('')
		$(this).attr('href', 'mailto:' + lstrEmail);
	});
}

/* Resize Function */
function applyResize() {
	$(window).on('resize', function() {  
		stickyNav = $('.scroll-down').offset().top + 20;
		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	}); 
}

/* Hash Function */
function checkHash() {
	lstrHash = window.location.hash.replace('#/', '#');
	if($('a[href='+ lstrHash +']').length > 0) {
		$('a[href='+ lstrHash +']').trigger('click');
	}
}