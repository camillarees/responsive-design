
const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

// Add swipe functionality using Hammer.js or any other library
// Example using Hammer.js:
const slider = document.querySelector('.image-slider');
const sliderContainer = document.querySelector('.image-slider-container');
const hammertime = new Hammer(slider);

hammertime.on('swipeleft', function() {
  slider.scrollLeft += slider.offsetWidth;
});

hammertime.on('swiperight', function() {
  slider.scrollLeft -= slider.offsetWidth;
});