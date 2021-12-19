;(function(){
	"use strict";

	$(document).ready(function() {

		$('.header-slider').slick({
			arrows: false, //показывает стрелки или нет
			dots: true, //показывает точки или нет
			adaptiveHeight: true,  //адаптивная высота оболочки под высоты слайда
			slidesToShow: 1, //количество показывающих слайдов
			slidesToScroll: 1, //прокрутка за один раз слайдов
			speed: 500, //скорость прокрутки в миллисекундах
			cssEase: 'linear', // тип CSS анимации 
			infinite: false, //будет ли слайд бесконечно прокручиваться (повторяться)
			initialSlide: 0, //стартовый слайд
			autoplay: false, //автопрокрутка
			autoplaySpeed: 1000, //скорость автопрокрутки в миллисекундах
			pauseOnFocus: true, //пауза при автопрокрутке при фокусе слайда
			pauseOnHover: true, //пауза при автопрокрутке при ховере слайда
			pauseOnDotsHover: true, //пауза при автопрокрутке при ховере точки
			draggable: true, // перелистовать с помощью мыши и зажатой кнопки
			swipe: true, //перелистовать плавно пальцем на телефоне
			tuchThreshold: 5, // на сколько частей делится слайд и сколько надо прослайдить, чтобы перейти на следующий слайд
			touchMove: true, //плавное движение слайдов при перелистывании мышкой или пальцем
			waitForAnimate: true, //при кликанье на стрелку не запускается новая прокрутка пока не выполнится предыдущая (быстро кликать на стрелку, а скорость прокрутки постоянная)
			centerMode: false, //главный слайд становится по центру и на него навешивается дополнительный класс, с помощью которого можно стилизовать центральный слайд (сделать непрозрачным, увеличенным и т.д.)
			variableWidth: false, //скрывает расстояние между слайдами и при изменении размеров экрана всегда обрезает правый край слайдов
			rows: 1, //количество рядов в слайдере
			slidesPerRow: 1, //количество сладов в рядах
			vertical: false, //вертикальные слайды (горизонтальный слайдер работает корректнее)
			verticalSwiping: false, //вертикальная прокрутка слайдов
			//asNavFor: ".sliderbig",//связывает два слайдера, чтоб синхронно прокручивались
			// responsive:[ //(адаптивность) позволяет менять свойства слайдера в зависимости от брейкпоинта (ширины) экрана
			// {
			// 	breakpoint: 1000,
			// 	settings: {
			// 		slidesToShow: 3 //любое свойство можно менять
			// 	}
			// },{
			// 	breakpoint: 800,
			// 	settings: {
			// 		slidesToShow: 2
			// 	}
			// }, {
			// 	breakpoint: 440,
			// 	settings: {
			// 		slidesToShow: 1
			// 	}
			// }
			// ],
			mobileFirst: false, // меняет значение breakpoint с max-width на min-width
			//appendArrows: $(".className"), //перемещает стрелки в указанный блок с классом className
			//appendDots: $(".className"), //перемещает точки в указанный блок с классом className
		});	
		$('.news-slider').slick({
			arrows: true, //показывает стрелки или нет
			dots: true, //показывает точки или нет
			adaptiveHeight: true,  //адаптивная высота оболочки под высоты слайда
			slidesToShow: 3, //количество показывающих слайдов
			slidesToScroll: 1, //прокрутка за один раз слайдов
			speed: 1000, //скорость прокрутки в миллисекундах
			cssEase: 'linear', // тип CSS анимации 
			infinite: true, //будет ли слайд бесконечно прокручиваться (повторяться)
			initialSlide: 0, //стартовый слайд
			autoplay: true, //автопрокрутка
			autoplaySpeed: 4000, //скорость автопрокрутки в миллисекундах
			pauseOnFocus: true, //пауза при автопрокрутке при фокусе слайда
			pauseOnHover: true, //пауза при автопрокрутке при ховере слайда
			pauseOnDotsHover: true, //пауза при автопрокрутке при ховере точки
			draggable: true, // перелистовать с помощью мыши и зажатой кнопки
			swipe: true, //перелистовать плавно пальцем на телефоне
			tuchThreshold: 3, // на сколько частей делится слайд и сколько надо прослайдить, чтобы перейти на следующий слайд
			touchMove: true, //плавное движение слайдов при перелистывании мышкой или пальцем
			waitForAnimate: true, //при кликанье на стрелку не запускается новая прокрутка пока не выполнится предыдущая (быстро кликать на стрелку, а скорость прокрутки постоянная)
			centerMode: false, //главный слайд становится по центру и на него навешивается дополнительный класс, с помощью которого можно стилизовать центральный слайд (сделать непрозрачным, увеличенным и т.д.)
			variableWidth: false, //скрывает расстояние между слайдами и при изменении размеров экрана всегда обрезает правый край слайдов
			rows: 1, //количество рядов в слайдере
			slidesPerRow: 1, //количество сладов в рядах
			vertical: false, //вертикальные слайды (горизонтальный слайдер работает корректнее)
			verticalSwiping: false, //вертикальная прокрутка слайдов
			
			mobileFirst: false, // меняет значение breakpoint с max-width на min-width
			//appendArrows: $(".className"), //перемещает стрелки в указанный блок с классом className
			//appendDots: $(".className"), //перемещает точки в указанный блок с классом className
		});	

		$("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
     });

		$("#about_us").on("click","#scroll", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
     });
	});

const leadNewYork = document.querySelector('#lead_text_newyork');
const leadHonkHong = document.querySelector('#lead_text_honkong');
const buttonNewYork = document.querySelector('#button_text_newyork');
const buttonHonkHong = document.querySelector('#button_text_honkong');

buttonNewYork.addEventListener('click', () => {
	leadNewYork.classList.toggle("see-more");
	buttonNewYork.textContent = "less details";
});
buttonHonkHong.addEventListener('click', () => {
	leadHonkHong.classList.toggle("see-more");
	buttonHonkHong.textContent = "less details";
});


})();
