$(function() {
	
	
		/*  	Fixed Header 		*/
	
	let header = $("#header"); 
	let intro = $("#intro");
	let introH = intro.innerHeight(); 
	let scrollPos = $(window).scrollTop(); 
	let nav = $("#nav");
	let navToggle = $("#navToggle"); 
	
	
	
	checkScroll(scrollPos,introH);
	
	$(window).on("scroll resize", function() { 
	introH = intro.innerHeight(); 
	scrollPos = $(this).scrollTop(); 
		
	checkScroll(scrollPos,introH);
		
	});
	
	function checkScroll(scrollPos,introH) { 
		if(scrollPos > introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed"); 
		}
		
	}
	
	
	
				/*SmoothScroll*/
	
	$("[data-scroll]").on("click", function(event){ 
		event.preventDefault();
		let elementId = $(this).data('scroll');
		
		let elementOffset = $(elementId).offset().top; 
		nav.removeClass("show");  
		$("html, body").animate({    
		scrollTop: elementOffset -70 
		}, 700); 
	});        
	
	
	
						/*Burger menu*/
	
	
		navToggle.on("click", function(event){ 
		event.preventDefault();
		nav.toggleClass("show");
	});
	
	
				/*ReviewsSlider*/
	let slider = $("#reviewsSlider");
	
	  slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		fade: true,
		  arrows: false, /*Скрываем стандартные стрелки*/
		  dots: true
	  });
	
VANTA.WAVES({
  el: "#intro",
  color: 0x4b2b98,
  shininess: 63.00,
  waveHeight: 22.00,
  waveSpeed: 0.75,
  zoom: 0.65
})

	
});