import { StarRating } from './star-rating/index.js';
const $containers = [...document.querySelectorAll('.star-rating')];
const $currentRatings = document.querySelectorAll('.current-rating > span');
let result;
let ratingChange;
$containers.forEach(($container, i) => {
  // star-rating 컨테이너 요소의 참조를 StarRating 함수에 전달해 star 요소들로 구성된 star-rating 요소를 동적 생성한다.
  StarRating($container);
  ratingEvent($container, i);
  const items = [...$container.children[0].children];
  hoverEvent(items);
  selectEvent(items);
});

function hoverEvent(items) {
  items.forEach(item => {
    item.addEventListener('mouseenter', e => {
      const hoverIndex = e.target.dataset.id;
      for (let i of items.slice(0, hoverIndex)) {
        i.classList.add('hovered');
      }
    });
    item.addEventListener('mouseleave', e => {
      for (let i of items) {
        i.classList.remove('hovered');
      }
    });
  });
}

function selectEvent(items) {
  items.forEach(item => {
    item.addEventListener('click', e => {
      for (let i of items) {
        i.classList.remove('selected');
      }
      const selectIndex = e.target.dataset.id;
      for (let i of items.slice(0, selectIndex)) {
        i.classList.add('selected');
      }
      ratingChange = new CustomEvent('rating-change', {
        detail: e.target.dataset.id,
      });
    });
  });
}

function ratingEvent($container, i) {
  $container.addEventListener('click', () => {
    $container.dispatchEvent(ratingChange);
  });

  $container.addEventListener('rating-change', e => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
}
