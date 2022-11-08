// lightGallery(document.querySelector('.gallery-gallery'));

new Swiper('.fullscrin-swiper', {

	// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
	keyboard: {
		// вкл/выкл
		enabled: true,
		// только когда слайдер в пределах видимости
		onlyInViewport: true,
	},
	
	clickable: true,
	// Бесконечный слайдер
	loop: true,
	
	// Переключение при клике на слайд
	slideToClickedSlide: true,
	
	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
	
	// Скорость
	speed: 4000,
	
	
	// Автопрокрутка
	autoplay: {
		delay: 11000,
		// Закончить на последнем слайде
		// stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	// Ленивая подгрузка
	lazy: {
		loadPrevNext: true,
	},
	});
// ----------------------------------------------
	new Swiper('.partners__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		 },
		// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
		keyboard: {
			// вкл/выкл
			enabled: true,
			// только когда слайдер в пределах видимости
			onlyInViewport: true,
		},
		slidesPerView: 5,
		// Бесконечный слайдер
		loop: true,
		
		// Переключение при клике на слайд
		slideToClickedSlide: true,
		
		// Скорость
		speed: 500,
		
		spaceBetween: -40,
		// Автопрокрутка
		autoplay: {
			delay: 7000,
			// Отключить после ручного переключения
			disableOnInteraction: false
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			520: {
				slidesPerView: 2,
			},
			750: {
				slidesPerView: 3,
			},
			990: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
		});
	// -------------------------------------
	const swiperPerColumn = new Swiper('.gallery__content', {
		pagination: {
			el: '.swiper-pagination',
			// Буллеты
			clickable: true

		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		grid: {
			rows: 2,
			fill: "column",
		 },
			// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
			keyboard: {
				// вкл/выкл
				enabled: true,
			},
			// Количество слайдов для показа
			slidesPerView: 8,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},


			// Навигация по хешу
			hashNavigation: {
				// Отслеживать состояние
				watchState: true,
			},
			// Отключить предзагрузку картинок
			preloadImages: false,
			// Ленивая подгрузка
			lazy: {
				// Подгружать на старте переключения слайда
				loadOnTransitionStart: true,
				// Подгрузить предыдущую и следующую картинки
				loadPrevNext: false,
			},
			// Слежка за видимыми слайдами
			watchSlidesProgress: true,
			// Добавление класса видимым слайдам
			watchSlidesVisibility: true,

			breakpoints: {

				0: {
				  slidesPerView: 2,
				  grid: {
					rows: 2,
					fill: "column",
				 },
				},

				400: {
					slidesPerView: 3,
					grid: {
					 rows: 2,
					 fill: "column",
				  },
				 },

				500: {
					slidesPerView: 4,
					grid: {
					 rows: 2,
					 fill: "column",
				  },
				 },

				750: {
				  slidesPerView: 5,
				  grid: {
					rows: 2,
					fill: "column",
				 },
				},

				850: {
				  slidesPerView: 6,
				  grid: {
					rows: 2,
					fill: "column",
				 },
				},
				1000: {
					slidesPerView: 7,
					grid: {
						rows: 2,
						fill: "column",
					 },
				 },
				1200: {
					slidesPerView: 8,
					grid: {
						rows: 2,
						fill: "column",
					 },
				 },
			 }

	 });
	
	 new Swiper('.main-excursions__swiper-excursions', {
		// СТРЕЛКИ
		navigation: {
			nextEl: '.swiper-button-next-1',
			prevEl: '.swiper-button-prev-1'
		},
	
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
		keyboard: {
			enabled: true,
		},

	
		// Отступ между слайдами
		spaceBetween: 20,
	
		loop: true,
		// Брейк поинты (адаптив)
		// Ширина экрана
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			550: {
				slidesPerView: 2,
			},
			850: {
				slidesPerView: 3,
			},
			1080: {
				slidesPerView: 4,
			},
		},
			// Навигация по хешу
			hashNavigation: {
				// Отслеживать состояние
				watchState: true,
			},
			// Отключить предзагрузку картинок
			preloadImages: false,
			// Ленивая подгрузка
			lazy: {
				// Подгружать на старте переключения слайда
				loadOnTransitionStart: true,
				// Подгрузить предыдущую и следующую картинки
				loadPrevNext: false,
			},
			// Слежка за видимыми слайдами
			watchSlidesProgress: true,
			// Добавление класса видимым слайдам
			watchSlidesVisibility: true,
	
	});
// Burger
$(document).ready(function(){
	$('.header-menu__burger').click(function(event){
		$('.header-menu__burger,.header-menu__row').toggleClass('burger-active');
		$('.offcanvas-menu-overlay').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(".offcanvas-menu-overlay").click(function(event) {
		$(".offcanvas-menu-overlay").removeClass("active");
		$(".header-menu__row").removeClass("burger-active");
		$(".header-menu__burger").removeClass("burger-active::before, burger-active::after, burger-active span");
		$('body').toggleClass('lock');
		$("html, body").css("overflow", "");
	 });
 });

// Scroll
// window.addEventListener('scroll', e => {
// 	let header = document.getElementById('header').classList;
// 	let active_class = "header-scrolled";

// 	if(pageYOffset > 0) header.add(active_class)
// 	else header.remove(active_class)
//  })



// видео о компании
const wrapperVideo = document.getElementById('video-about');

document.querySelector('.about__video img').onclick = function() {
	$('.about').addClass('about__active');
	wrapperVideo.play();
 };
 document.querySelector('._icon-play2').onclick = function() {
	$('.about').addClass('about__active');
	wrapperVideo.play();
 };


// счет цифр

$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();

	if(scroll == 0)
	 setTimeout(function(){reInitCount();},500);
});

function reInitCount(){
 $(".stat-count").each(function() {
	$(this).html('0');
	count($(this));
 });
}

function reInitCount(){
	$(".stat-count").each(function() {
	  $(this).html('0');
	  count($(this));
	});
 }
 
 function count($this) {
	var current = parseInt($this.html(), 10);
	current = current + 1;
	$this.html(++current);
	if (current > $this.data('count')) {
	  $this.html($this.data('count'));
	} else {
	  setTimeout(function() {
		 count($this)
	  }, 1);
	}
 }
  reInitCount();
 
  $(window).scroll(function (event) {
	  var scroll = $(window).scrollTop();
		 if(scroll == 0)
			 setTimeout(function(){reInitCount();},500);
		 
			 
 });