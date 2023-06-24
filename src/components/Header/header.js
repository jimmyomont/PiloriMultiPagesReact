import feather from 'feather-icons';

feather.replace();

const menuToggler = document.getElementById('menuToggler');
const menu = document.querySelector('.menu');

const searchToggler = document.getElementById('searchToggler');
const search = document.querySelector('.search');

menuToggler.addEventListener('click', () => {
  menu.classList.toggle('menu--on');
  search.classList.remove('search--on');
});

searchToggler.addEventListener('click', () => {
  search.classList.toggle('search--on');
  menu.classList.remove('menu--on');
});

const toTop = document.querySelector('.footer-totop');
toTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});