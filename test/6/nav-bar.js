const navbar = document.querySelector('.navbar');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  navbar.classList.toggle('show-navbar');
});
