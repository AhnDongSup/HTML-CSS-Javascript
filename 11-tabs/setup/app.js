imgs = ['./까치.jpeg', './편지.jpg', './크리스마스.jpg', './화이트.jpg', './발렌타인.jpeg', './빼빼로.jpg'];
events = [
  {
    eventName: 'Chuseok',
    month: 9,
    day: 29,
    emo: '🐧',
  },
  {
    eventName: 'Parents Day',
    month: 5,
    day: 8,
    emo: '👨‍👩‍👧‍👦',
  },
  {
    eventName: 'Christmas',
    month: 12,
    day: 25,
    emo: '🎄',
  },
  {
    eventName: 'White Day',
    month: 3,
    day: 14,
    emo: '🍭',
  },
  {
    eventName: 'Valentine Day',
    month: 2,
    day: 14,
    emo: '🍫',
  },
  {
    eventName: 'Pepero Day',
    month: 11,
    day: 11,
    emo: '💝',
  },
];

const btnContainer = document.querySelector('.btn-container');
const aboutContent = document.querySelector('.about-content');
const img = document.querySelector('.about-img img');

window.addEventListener('DOMContentLoaded', () => {
  setupItem();
});

function setupItem() {
  events.forEach(e => {
    tabVar(e);
    allContent(e);
  });
  const btns = document.querySelectorAll('.tab-btn');
  const content = document.querySelectorAll('.content');
  btnClick(btns, content);
  setInterval(function () {
    countdown(content);
  }, 1000);
}

function tabVar(e) {
  const element = document.createElement('button');
  element.classList.add('tab-btn');
  const atr = document.createAttribute('data-id');
  atr.value = e.eventName;
  element.textContent = e.emo;
  element.setAttributeNode(atr);
  btnContainer.appendChild(element);
}

function allContent(e) {
  const element = document.createElement('div');
  element.classList.add('content');
  element.setAttribute('id', e.eventName);
  element.innerHTML = `
  <article class="gift-info">
  <h3></h3>
  <h4 class="giveaway"></h4>
  <div class="deadline">
    <div class="deadline-format">
      <div>
        <h4 class="days">00</h4>
        <span>days</span>
      </div>
    </div>
    <div class="deadline-format">
      <div>
        <h4 class="hours">00</h4>
        <span>hours</span>
      </div>
    </div>
    <div class="deadline-format">
      <div>
        <h4 class="minutes">00</h4>
        <span>mins</span>
      </div>
    </div>
    <div class="deadline-format">
      <div>
        <h4 class="seconds">00</h4>
        <span>secs</span>
      </div>
    </div>
    </div>
  </article>
  `;
  aboutContent.appendChild(element);
}

function btnClick(btns, content) {
  btns.forEach((item, index) => {
    item.addEventListener('click', () => {
      img.src = imgs[index];
      btns.forEach(e => {
        e.classList.remove('active');
      });
      item.classList.add('active');
      const id = item.dataset.id;
      const selectContent = document.getElementById(id);
      content.forEach(e => {
        e.classList.remove('active');
      });
      selectContent.classList.add('active');
    });
  });
}

function countdown(content) {
  content.forEach((e, index) => {
    const giveaway = e.querySelector('.giveaway');
    const deadline_h4 = e.querySelectorAll('.deadline-format h4');
    giveaway.textContent = `디데이 기준 일은 ${events[index].month} 월 ${events[index].day} 일 입니다.`;
    const FutureDay = new Date(2023, events[index].month - 1, events[index].day, 0, 0, 0);
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 1000 * 60;

    const toDay = new Date();
    const t = FutureDay.getTime() - toDay.getTime();
    const days = Math.floor(t / oneDay);
    const hours = Math.floor((t % oneDay) / oneHour);
    const minutes = Math.floor((t % oneHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
    deadline_h4.forEach((item, index) => {
      item.textContent = format(values[index]);
    });
  });
}
