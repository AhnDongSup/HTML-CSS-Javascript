// let admin, name;
// name = "John";
// admin = name;
// alert(admin);

// let planet = "Earth";
// let userName = "John";
// console.log(planet);






// ##### click event를 listen
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color="blue"
}

title.addEventListener("click", handleTitleClick);
// 마우스가 element에 올라갈때도 벗어날 때도 event가 발생
// 그러므로 어떤 event 를 listen하고 싶은지 명시
// click event를 listen하고, 이 click event가 발생하면
// handleTitleClick라는 function이 동작
// Javascript에 이 function 이름을 넘겨줘서 
// 유저가 title을 click할 경우에, JavaScript가 
// 나 대신 실행버튼을 눌러주게 하는 것임
// 전달만 해주는 것이기 때문에 뒤에 ()를 붙이면 안됨
// 우리 : Javascript에 function만 넘김
// 자바스크립트 : 유저가 click할 경우 실행버튼을 대신 누름
