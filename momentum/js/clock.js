const clock = document.querySelector("h2#clock");
// intervals - 매번일어나야하는 무언가
// timeout 

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval - 원하는 초마다 재실행
// setTimeout - 얼마나 기다려야할지

// 현재 날짜 시간 가져오기
// const date = new Date();
// date.getDay()
// date.getDate()

// padStart() - string에 쓸 수 있는 function
// "1".padStart(2,"0")
// '01'
// "1".padStart(3,"0")
// '001'
// "1".padStart(0,"0")
// '1'
// "1".padEnd(2,"0")
// '10'

// number이 아닌ㄴ text로 변환하는 법
// new Date().getHours()
// 21
// String(new Date().getHours())
// '21'