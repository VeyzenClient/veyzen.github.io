const navToggle = document.getElementById('nav-toggle');
const fullscreenNav = document.getElementById('fullscreen-nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  fullscreenNav.classList.toggle('open');
});

function toggleNav() {
  navToggle.classList.remove('active');
  fullscreenNav.classList.remove('open');
}