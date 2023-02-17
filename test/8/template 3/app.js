import AnalogClock from './AnalogClock.js';
const clocks = document.querySelectorAll('.analog-clock');
window.addEventListener('DOMContentLoaded', () => {
  clocks.forEach(e => {
    analogClock(e);
  });
});

function analogClock(e) {
  setInterval(() => {
    const time = new Date();
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hour = time.getHours();
    e.querySelector('.second').style.setProperty('--deg', `${sec * 6}`);
    e.querySelector('.minute').style.setProperty('--deg', `${min * 6}`);
    e.querySelector('.hour').style.setProperty('--deg', `${hour * 30}`);
  }, 1000);
}
