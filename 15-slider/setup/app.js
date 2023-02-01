const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', e => {
  counter++;
  display();
});

prevBtn.addEventListener('click', e => {
  counter--;
  display();
});

function display() {
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  if (counter === slides.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = '';
  }
  if (counter > 0) {
    prevBtn.style.display = '';
  } else {
    prevBtn.style.display = 'none';
  }
  console.log(counter);
  console.log(counter);
  slides.forEach(e => {
    e.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = 'none';
