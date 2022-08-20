const navIcon = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close')
const navList = document.querySelector('.nav__list');

const navOpen = () => {
  navList.classList.add('show');
  document.body.style = 'visibility: visible; height: 100vh, width: 100vw, overflow: hidden;'
}

const navClose = () => {
  navList.classList.remove('show');
  document.body.style = 'visibility: visible; height: initial, width: 100%, overflow-x: hidden;'
}

navIcon.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);