import Hammer from 'hammerjs';

const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

const slider = document.querySelector('.blends-info-slider');
const sliderContainer = document.querySelector('.blends-info');
const hammertime = new Hammer(slider);

hammertime.on('swipeleft', function() {
  slider.scrollLeft += slider.offsetWidth;
});

hammertime.on('swiperight', function() {
  slider.scrollLeft -= slider.offsetWidth;
});
