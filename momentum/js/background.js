// Javascript에서 html element를 생성 
const images = ["1.jpg", "2.png", "3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// img 라는 element 생성
// createElement - 원하는 element를 만들 수 있음

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// appendChild - body에 html을 추가하겠다 
// prepend
// append는 가장 뒤에 prpend는 가장 위에 오게 함