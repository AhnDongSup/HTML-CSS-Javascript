// ##### click event를 listen
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    title.style.color="blue"
}
// 마우가 클릭
function handleMouseEnter() {
    // console.log("mouse is here");
    title.innerText = "Mouse is here!";
}
// 마우스가 위에 올라가 있을 떄 

function handleMouseLeave() {
    title.innerText = "Mouse is Not here";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    // h1 처럼 document 밑으로 가져올 순 없음
    // 여기서 document.title을 호출한다면, 위에 있는 title이 아닐 것임
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD!");
}
// ##### event를 사용하는 방법 두가지
// 
// 첫번째 방법(첫번째 방법을 더 선호) - 나중에 removeEventListener를 통해서 event lis tener를 제거할 수 있기 때문
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// 두번째 방법
// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// 창크기를 조절할때 
window.addEventListener("resize", handleWindowResize);
// 무언가를 복사할 때
window.addEventListener("copy", handleWindowCopy);
// wifi가 해제되거나 연결될 떄 
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
// document의 body,head,title 이런것들은 중요하기 때문에 따로 존재
// 나머지 element들(<h1>,...)은 querySelector나 getElementById 등으로 찾아와야 함
// 여기까지가 element를 찾아서 event listener를 추가하고, event가 발생하면 반응을 해주는 작업
