$(function() {
	
	
		/*  	Fixed Header 		*/
	
	let header = $("#header"); /*Объявление переменных и подключение разделов из html файла (#header)*/
	let intro = $("#intro");
	let introH = intro.innerHeight(); /*Измерение высоты окна раздела Intro, обращение к селектору intro*/
	let scrollPos = $(window).scrollTop(); /*Обращение к окну и вычисление, сколько пикселей было проскролено от верха окна*/
	let nav = $("#nav"); /*Объявление переменных для меню навигации*/
	let navToggle = $("#navToggle"); /*Объявление переменных для бургер меню*/
	
	
	
	checkScroll(scrollPos,introH);  /*Запись параметров scrollPos, introH в функцию checkScroll. Вместе события Load*/
	
		$(window).on("scroll resize", function() { /*Слежение за скоролом на нашей странице, метод (.on("scroll") load - событие, которое проверяет позицию сразу после обновления страницы! resize - проверка размера окна после измеренения разрешения*/
	introH = intro.innerHeight(); /*Перезапись значения высоты, т.к используем событие resize*/
	scrollPos = $(this).scrollTop(); /*Сравнение текущей позиции со стартовой позицией, и запись текущего значения в scrollPos*/
		
	checkScroll(scrollPos,introH); /*ЗАпись полученных параметров и отрпавка в функцию*/
		
	});
	
	function checkScroll(scrollPos,introH) { 
		if(scrollPos > introH) {
			header.addClass("fixed"); /*Если позиция скрола меньше высоты окна IntroH, то добавляет класс fixed, тем самым фиксируя нашу шапку*/
		}
		else {
			header.removeClass("fixed"); /*Тут соотстветсвенно наоборот*/
		}
		
	}
	
	
	
				/*SmoothScroll*/
	
	$("[data-scroll]").on("click", function(event){ /*Выборка элементов с атрибутом data-scroll по событию .on("click")*/
		event.preventDefault();   /*Отмена стандартного поведения ссылки*/
		let elementId = $(this).data('scroll'); /*Получение доступа к элементу по которому был клик и получение его data отрибута("scroll"). Теперь в перемеонной elementId хранится Id блока, к которому будет скрол*/
		
		let elementOffset = $(elementId).offset().top; /*Получение позиции элемента от верха страницы (.offset().top)*/
		
		nav.removeClass("show");  /* Сворачиваем меню при клике*/
		$("html, body").animate({     /*Собственно сам скроллинг, Сселектор именно по двум элементам html и body. Метод animate - плавный скрол*/
		scrollTop: elementOffset -70  /*Скролл от верха(scrollTop до нашей позиции elementOffset. -70 для того, чтобы был небольшой отступ от скрола вверх*/
		}, 700); /*500 милисекунд - скорость движения скрола*/
	});        
	
	
	
						/*Burger menu*/
	
	
		navToggle.on("click", function(event){   /*Следим за селектором navToggle и при клике будем что-то с ним делать!*/
		event.preventDefault();
		nav.toggleClass("show"); /*Метод toggleClass при клике будет показывать или убирать меню (show) - это класс, который будет показываться*/
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