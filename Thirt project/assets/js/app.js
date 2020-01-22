$(function() {
	
	var header = $("#header"),	
		introH = $("#intro").innerHeight(), /*Изменяет высоту блока Intro*/
		scrolloffset = $(window).scrollTop(); /*Отступ, сколько проскролили сниз страницы*/
	
	
	
	/*  	Header fixed  */
	
	
	checkScroll(scrolloffset);
	
	$(window).on("scroll", function(){
		scrolloffset = $(this).scrollTop();
		checkScroll(scrolloffset)
	
	});
	
	function checkScroll(scrolloffset) {
			
		
		if (scrolloffset >= introH) {  /*Если значение скроллофсет больше или равно интроН, тогда назначить классу хедер клсс хедерФиксед, если меньше вернуь просто класс хедер*/
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	
	/* SMOOTH SCROLL (PLAVNIY)*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault(); /*Отменяет стандартное поведение ссылки*/
		var $this = $(this),
			blockId = $this.data('scroll'),
			blockoffset = $(blockId).offset().top; /*В переменной blockid теперь хранится id блока на который будем скролить. При нажатии на блок мы получаем значение, на сколько далеко находится блок, к кторому мы хотим попасть*/
			$("#nav a").removeClass("active"); /*Убираем класс эктив у всех ссылок*/
			$("#nav").toggleClass("active");$this.addClass("active");/*При нажатии на элемент даём ему класс active*/
			
			$("html,body").animate({   /*Здесь уже сам метод скрола, плавный переход, 500 это милисекунды, за которые будет происходить скролл*/
			scrollTop: blockoffset
		}, 500);
	});
	
	
	/* 		MENU nav toggle  		*/
	
	$("#nav_toggle").on("click", function(event) {
	event.preventDefault();
	$(this).toggleClass("active");
	$("#nav").toggleClass("active");
	});
	
	
	/* COllapse  		*/
	
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		
		var $this = $(this),
			blockId = $this.data('collapse');
		$this.toggleClass("active");
	});
	
	
	/*slider*/
	
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
});