(function ($) {
	"use strict";
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

var swiper = new Swiper(".banner-slider2", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500, // Autoplay duration in milliseconds
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next-2",
		prevEl: ".prev-2",
	},

	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1400: {
			slidesPerView: 3,
		},
	}

});
var swiper = new Swiper(".discover-slider", {
	slidesPerView: 1,
	speed: 1500,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500, // Autoplay duration in milliseconds
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next-1",
		prevEl: ".prev-1",
	},

	breakpoints: {
		280: {
			slidesPerView: 1,
		},
		386: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		1400: {
			slidesPerView: 3,
		},
	}

});



new WOW().init();



}(jQuery));