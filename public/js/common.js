import cardFlipper from "../libs/cardFlipper/cardFlipper.js";

$(document).ready(() => {

	let slider__left  = $('.slider__block-one');
	let slider__right = $('.slider__block-two');

	slider__left.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
		document.querySelector('.slider__number').innerHTML = '0' + Number(nextSlide + 1);
	});

	slider__left.slick({
		infinite: true,
		vertical: true,
		arrows: false,
		dots: true,
		appendDots: '.slider__navigation',
		dotsClass: 'slider__dots',
		asNavFor: '.slider__block-two',
		// autoplay: true,
		cssEase: 'ease-in-out',
		speed: 800,
		autoplaySpeed: 4000,
		slidesToShow: 1,
	});
	slider__right.slick({
		infinite: true,
		vertical: true,
		arrows: false,
		dots: false,
		asNavFor: '.slider__block-one',
		// autoplay: true,
		cssEase: 'ease-in-out',
		speed: 500,
		autoplaySpeed: 300,
		slidesToShow: 1,
	});

	tippy('[data-tippy-content]', {
		placement: 'bottom-end',
	});

	const language_content = document.querySelector('.language__list');
	tippy(document.querySelector('.language'), {
		hideOnClick: true,
		trigger: 'click',
		interactive: true,
		content: language_content,
		placement: 'bottom-end',
	});

	new cardFlipper({
		selector: '.catalog-item__image',
		maxTilt: 30
	});

	menuOpen();

});

function menuOpen() {
	const hamburger = document.querySelector('.hamburger');
	const body = document.querySelector('body');

	hamburger.addEventListener('click', evt => {
		body.classList.toggle("menu-open");
	});
}