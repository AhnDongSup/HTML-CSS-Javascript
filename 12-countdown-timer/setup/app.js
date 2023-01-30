const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureTime = new Date(2022, 2, 27, 0, 0, 0);
const month = futureTime.getMonth();
const day = futureTime.getDate();
const weekday = weekdays[futureTime.getDay()];
const hour = futureTime.getHours();
const minute = futureTime.getMinutes();

giveaway.textContent = `디데이 기준 일은 ${month} 월 ${day} 일 ${weekday} 입니다`;

function refresh() {
  const today = new Date();
  const t = futureTime.getTime() - today.getTime();

  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });
  function format(item) {
    if (10 > item) {
      return (item = `0${item}`);
    }
    return item;
  }
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = '<h4 class="expired">over</h4>';
  }
}

let countdown = setInterval(refresh, 1000);

refresh();
// 현재 년/월/일/시간/분
// 미래시간 설정
// 미래시간 - 현재시간
// 년/월/일/시간/분 계산s
// 10 보다 작은 단위는 앞에 0붙히기
// innerHTML
// 시간이 지났을 때 멈추기
// clearInterval
// setInterval
