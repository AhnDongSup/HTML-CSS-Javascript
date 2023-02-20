const slides = document.querySelectorAll('.slide');
const symbols_li = [...document.querySelectorAll('.material-symbols-outlined')];
const bannerTitle_div = document.querySelector('.banner_title');

titleList = {
  h4: ['최초의 99.9% 항균', '피부 고민', '도시락 포장 고민', '텀블러 고민'],
  span: ['세균 냄새 걱정 없이 상쾌하게!', '클렌징폼으로 싹!', '단번에 싹!', '머그컵으로 싹!'],
};

let index = 0;
function refresh() {
  setInterval(() => {
    index += 1;
    slideF(index);
    symbolF(index);
    titleF(index);
  }, 2000);
}

function slideF(e) {
  if (e > 3) {
    index = 0;
  }
  slides.forEach(e => {
    e.style.transform = `translateX(-${index * 100}%)`;
  });
}

function symbolF(e) {
  symbols_li.forEach(e => {
    e.classList.remove('select');
  });
  symbols_li[e].classList.add('select');
}
refresh();

function titleF(e) {
  bannerTitle_div.children[0].innerHTML = titleList.h4[e];
  bannerTitle_div.children[1].innerHTML = titleList.span[e];
}

symbols_li.forEach((e, I) => {
  e.addEventListener('click', () => {
    index = I;
    symbolF(index);
    slideF(index);
    titleF(index);
  });
});
