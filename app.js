
const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

function flipCard(card) {
    var blendCard = card.parentNode; // Get the parent blend-card element
    if (blendCard.classList.contains('flipped')) {
      blendCard.classList.remove('flipped'); // Remove 'flipped' class to flip back
    } else {
      blendCard.classList.add('flipped'); // Add 'flipped' class to flip
    }
  }