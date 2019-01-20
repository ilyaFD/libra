
$( document ).ready(function() {

//couter
	var countBlockTop = $(".numbers").offset().top,
	windowHeight = window.innerHeight,
	show = true;
	function countup(numbers){	
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;						
				$('.numbers').spincrement();
			}
		})	
	}
	$(function() {
		countup();
	});

//google map
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		var mapOptions = {
			zoom: 11,
			center: new google.maps.LatLng(32.113371, 34.8191275),

			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffd400"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c2c4c4"},{"visibility":"on"}]}]
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(32.1133727, 34.8366371),
			map: map,
			title: 'Snazzy!'
		});
	};

//burger menu
	var burger = $('.burger-wrap'),
	header = $('.header__container'),
	menu = $('.dropdown-menu'),
	menu_nav = $('.header__nav'),
	lang = $('.dropdown-lang');

	burger.on('click', function() {
		if( header.hasClass('lang-open') ){
			menu.slideToggle();
			header.removeClass('lang-open');		
			lang.removeClass('show');
		}
		header.toggleClass('menu-open');
		menu_nav.slideToggle(200);
	});

//lang dropdown
	lang.on('click', function() {
		if( header.hasClass('menu-open') ){
			menu_nav.slideToggle();
			header.removeClass('menu-open');
		}
		header.toggleClass('lang-open');
		lang.toggleClass('show');
		menu.slideToggle(200);
	});

//anchor
	var anchor = $('.anchor');

	anchor.on('click', function() {
		if( header.hasClass('lang-open') ){
			menu.slideToggle();
			header.removeClass('lang-open');		
			lang.removeClass('show');
		}
		else if( header.hasClass('menu-open') ){
			menu_nav.slideToggle();
			header.removeClass('menu-open');
		}
	});
	anchor.on('click', function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

//form btn style
	var form = $('#form'),
	btn = $('.btn'),
	field = $('.field');

	form.each(function(){
		field.addClass('empty-field');
		function checkInput(){
			field.each(function(){
				if($(this).val() != ''){
					$(this).removeClass('empty-field');
				} else {
					$(this).addClass('empty-field');
				}
			});
		}
		setInterval(function(){
			checkInput();
			var sizeEmpty = $( '.empty-field' ).length;
			if(sizeEmpty > 0){
				btn.removeClass('active-btn');
			} else {
				btn.addClass('active-btn');
			}
		},500);
	});

//form submit
	var form_content = $('.contact__form__content'),
	thank_you = $('.sent-to'),
	thank_you_btn = $('.sent-to__btn');

	form.submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: 'php/send.php',
			data: form_data,
			success: function() {
				thank_you.slideToggle().css('display', 'flex');
				form_content.slideToggle();
			}
		});
		$(this)[0].reset();
		return false;
	});

	thank_you_btn.on('click', function() {
		form_content.slideToggle();
		thank_you.slideToggle();
	});
})