
const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

const blendCards = document.querySelectorAll('.blends .blends-info .blend .blend-card');

blendCards.forEach(blendCard => {
    blendCard.addEventListener('click', () => {
        blendCard.classList.toggle('flip');
    });
});