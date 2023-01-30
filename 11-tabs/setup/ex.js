imgs = ['./까치.jpeg', './편지.jpg', './크리스마스.jpg'];
events = [
  {
    eventName: 'Chuseok',
    month: 9,
    day: 29,
  },
  {
    eventName: 'Parents Day',
    month: 5,
    day: 8,
  },
  {
    eventName: 'Christmas',
    month: 12,
    day: 25,
  },
];
const article = document.querySelector('.about');
const content = document.querySelectorAll('.content');
const btns = document.querySelectorAll('.tab-btn');
const img = document.querySelector('.about-img img');

window.addEventListener('DOMContentLoaded', () => {
  setInterval(countdown, 1000);
});

function countdown() {
  content.forEach((e, index) => {
    const giveaway = e.querySelector('.giveaway');
    const deadline = e.querySelector('.deadline');
    const deadline_h4 = e.querySelectorAll('.deadline-format h4');
    giveaway.textContent = `디데이 기준 일은 ${events[index].month} 월 ${events[index].day} 일 입니다.`;
    const FutureDay = new Date(2023, events[index].month - 1, events[index].day, 0, 0, 0);
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 1000 * 60;

    const toDay = new Date();
    console.log(toDay);
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

// function countdown(item) {

// }
