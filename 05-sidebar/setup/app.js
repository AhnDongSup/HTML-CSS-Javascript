const button = document.querySelector('.sidebar-toggle');
const sidebars = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

button.addEventListener('click', function () {
  if (sidebars.classList.contains('show-sidebar')) {
    sidebars.classList.remove('show-sidebar');
  } else {
    sidebars.classList.add('show-sidebar');
  }
});

closeBtn.addEventListener('click', function () {
  sidebars.classList.remove('show-sidebar');
});
