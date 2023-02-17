const toggleBtn = document.querySelector('.toggle');
const navbar = document.querySelector('nav');
const main = document.querySelector('main');
const body = document.querySelector('body');

window.addEventListener('load', () => {
  body.style.visibility = 'visible';
});

if (localStorage.getItem('item')) {
  navbar.classList.toggle('active');
  body.classList.toggle('pre-load');
}

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  body.classList.remove('pre-load');
  if (navbar.classList.contains('active')) {
    localStorage.setItem('item', 'true');
  } else {
    localStorage.removeItem('item');
  }
});
