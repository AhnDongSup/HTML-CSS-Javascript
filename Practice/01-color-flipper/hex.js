const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let count = 0;
let setColor = '';
const color = document.querySelector('.color');
const btns = document.querySelectorAll('.btn');
const numbers = document.getElementById('number');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('Plus')) {
      count++;
      setColor = 'blue';
    } else if (styles.contains('hero')) {
      setColor = '#fff';
      count = 0;
      let backColor = '#';
      for (let i = 0; i < 6; i++) {
        backColor += hex[randomNumber()];
        console.log(backColor);
      }
      color.textContent = backColor;
      document.body.style.backgroundColor = backColor;
    } else {
      count--;
      setColor = 'yellow';
    }
    numbers.style.color = setColor;
    numbers.textContent = count;
  });
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
