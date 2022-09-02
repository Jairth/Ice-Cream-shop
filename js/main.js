const navIcon = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const $form = document.querySelector('form');
const send = document.querySelector('#mimail');

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




function handleSubmit (e) {
  e.preventDefault()
  const form = new FormData(this) 
  send.setAttribute('href', `mailto:rodriguez6191@hotmail.com?subject=${form.get('firstName')}${form.get('lastName')}${form.get('email')}&body=${form.get('message')}`)
  send.click()
}

$form.addEventListener('submit', handleSubmit)
