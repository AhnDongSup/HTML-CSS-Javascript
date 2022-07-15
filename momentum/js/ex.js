// const a = 5;
// const b = 2;
// let myName = "dongsup";
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName);

// myName = "ahndongsup";
// console.log("hello " + myName);

// const amIFat = null;
// let something;
// console.log(something);
// console.log(amIFat);

// const daysOfWeek = ['mon' , 1 , true , null , undefined , 'tue' , 'wed' , 'thu' , 'fri' , 'sat'];
// console.log(daysOfWeek[5]);
// daysOfWeek[1] = 2;
// daysOfWeek.push('sun') // 추가
// console.log(daysOfWeek);

// const player = {
//     name: "dongsup",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// // player = false; //error
// player.fat = false;
// console.log(player);
// player.lastName="Ahn";
// console.log(player);
// player.points+=15;
// console.log(player.points);


// function sayHello(nameOfperson, age){
//     console.log("Hello my name is " + nameOfperson + " and I'm " + age);
// }
// function plus(a,b){
//     console.log(a+b);
// }
// sayHello("dongsup",10);
// plus(1,3);
// alert("lalala");


// const player = {
//     name: "donsup",
//     plus:function(a,b){
//         console.log("number : " , a + b);
//         console.log("number : " , a - b);
//         console.log("number : " , a ** b);
//         console.log("number : " , a / b);
//     },
// };
// player.plus(3,4);


// ##### const / let
// const a =5;
// let dongsupFat = true;
// dongsupFat = false;
// console.log(dongsupFat)


// ##### undefined/null
// let hello; //undefined
// console.log(hello);
// let hello = null; //null
// console.log(hello);


// ##### return
// const age = 23;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge)


// ##### console.log
// const player = {
//     name: "donsup",
//     plus:function(a,b){
//         // console.log(a,b);
//         return a**b
//     },
//     minus:function(a,b){
//         return a-b
//     },
// };
// const plusresult = player.plus(3,4); //console.log
// const minusresult = player.minus(plusresult, 10); //상호의존
// console.log(plusresult)
// console.log(minusresult)


// const age = parseInt(prompt("How old are you?"));
// // const age = prompt("How old are you?");
// // console.log(typeof age, typeof parseInt(age)); // parseInt 문자열을 정수로 변환(숫자만 처리가능)
// // console.log(isNaN(age));
// if(isNaN(age) || age < 0){
//     alert("Please write a number"); //참일때 = isNaN이 참일 때
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50){
//     console.log("You can drink")
// } else if (age > 50 && age <=80){
//     console.log("you should exercise");
// } else {
//     console.log("Thank can't drink")
// }


// // ##### HTML을 Javascript로 읽기
// const title = document.getElementById("title"); //title이란 id를 가진 element찾기(html element)
// //document에서 항목을 가져오거나 항목을 변경할 수 있음

// // console.dir(title);
// title.innerHTML = "Got you!";

// console.log(title.id);
// console.log(title.className);
// console.log(title);



// // ##### element를 CSS 방식으로 검색
// const hellos = document.getElementsByClassName("hello");
// // const title = document.getElementsByTagName("h1");
// const title = document.querySelector(".hello h1"); // element를 CSS 방식으로 검색가능
// // hello란 class 내부에 있는 h1을 가지고 올 수 있다는 것을 의미
// const title = document.querySelectorAll(".hello h1");
// // querySelector은 같은 이름의 element가 있어도 첫번째로 검색된 것만 가져오기때문에 다 가져오고싶으면 뒤에 All
// const title = document.querySelector("#hello");
// // id를 통해서 접근도 가능 아래코드와 같은 기능임
// const title = document.getElementById("hello");
// console.log(hellos);
// console.log(title);

// const title = document.querySelector(".hello h1");
// const title = document.querySelector("div.hello:first-child h1");
// console.dir(title); // Element의 내부를 보고싶을 때 dir
// title.style.color = "blue";



// // ##### click event를 listen
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     title.style.color="blue"
// }

// title.addEventListener("click", handleTitleClick);
// // 마우스가 element에 올라갈때도 벗어날 때도 event가 발생
// // 그러므로 어떤 event 를 listen하고 싶은지 명시
// // click event를 listen하고, 이 click event가 발생하면
// // handleTitleClick라는 function이 동작
// // Javascript에 이 function 이름을 넘겨줘서 
// // 유저가 title을 click할 경우에, JavaScript가 
// // 나 대신 실행버튼을 눌러주게 하는 것임
// // 전달만 해주는 것이기 때문에 뒤에 ()를 붙이면 안됨
// // 우리 : Javascript에 function만 넘김
// // 자바스크립트 : 유저가 click할 경우 실행버튼을 대신 누름



// More Events
// ##### click event를 listen
// const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);

// function handleTitleClick(){
//     title.style.color="blue"
// }
// // 마우가 클릭
// function handleMouseEnter() {
//     // console.log("mouse is here");
//     title.innerText = "Mouse is here!";
// }
// // 마우스가 위에 올라가 있을 떄 

// function handleMouseLeave() {
//     title.innerText = "Mouse is Not here";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
//     // h1 처럼 document 밑으로 가져올 순 없음
//     // 여기서 document.title을 호출한다면, 위에 있는 title이 아닐 것임
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("ALL GOOOD!");
// }
// // ##### event를 사용하는 방법 두가지
// // 
// // 첫번째 방법(첫번째 방법을 더 선호) - 나중에 removeEventListener를 통해서 event lis tener를 제거할 수 있기 때문
// // title.addEventListener("click", handleTitleClick);
// // title.addEventListener("mouseenter", handleMouseEnter);
// // 두번째 방법
// // title.onclick = handleTitleClick;
// // title.onmouseenter = handleMouseEnter;

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// // 창크기를 조절할때 
// window.addEventListener("resize", handleWindowResize);
// // 무언가를 복사할 때
// window.addEventListener("copy", handleWindowCopy);
// // wifi가 해제되거나 연결될 떄 
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
// // document의 body,head,title 이런것들은 중요하기 때문에 따로 존재
// // 나머지 element들(<h1>,...)은 querySelector나 getElementById 등으로 찾아와야 함
// // 여기까지가 element를 찾아서 event listener를 추가하고, event가 발생하면 반응을 해주는 작업


// *** css in javascript 1,2,3
// const title = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
    // const currentColor = title.style.color;
    // let newColor;
    // if(title.style.color === "blue"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // title.style.color = newColor;
    // 1. element를 찾아라
    // 2. event를 listen하라
    // 3. 그 event에 반응해라 



    // title.className = "active";
    // title에 active class를 전달해주고 싶을 때 
    // title.className은 getter이면서 setter 

    // console.log(title.className);
    // class를 얻어올 수 있음 

    // ### className 응용 
    // "clicked" 가 반복되어 쓰이는데 만약 오타라도 난다면 
    // 오류를 찾기 어렵기 때문에 변수를 만들어 사용하는 것을 추천
    // 만약 변수를 잘못 써서 오류가 났다고 하더라도 콘솔창에서 알기쉽게 알려주기 때문에 유용
    // if(title.className === "clicked") (x)
        // const clickedClass = "clicked"
        // if(title.className === clickedClass) {
        //     title.className = "";
        // } else {
        //     title.className = clickedClass;
        // }

    // ### classList
    // className은 기존의 클래스 이름이 무엇이든간에 무조건 교체하지만
    // classList는 class들의 목록으로 작업 할 수 있게 허용
    // contains function - 명시한 class가 HTML element의 class에 포함되어 있는지 말해줌 
    // remove function - 명시한 class를 제거
    // add function - 명시한 class를 추가 (교체가 아닌 부가적인 개념)
    
    // const clickedClass = "clicked"
    // if(title.classList.contains(clickedClass)) {
    //     title.classList.remove(clickedClass);
    // } else {
    //     title.classList.add(clickedClass);
    // }

    // toggle function - class name이 존재하는지 확인할 수 있음(위에 코드를 한번에 해결해줌)
    // title의 classList에 className이 포함되어있다면 포함되었다면 제거하고 , 포함되지 않았다면 추가 
    // title.classList.toggle("clicked");
// }

// title.addEventListener("click", handleTitleClick);


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css"/>
//     <title>Momentum</title>
// </head>
// <body>
//     <div class="hello">
//         <h1 class="sexy-font">Click me!</h1>
//     </div>
//     <script src="app.js"></script>
// </body>   
// </html>

// body {
//     background-color: 'beige';
// }

// h1 {
//     color : cornflowerblue;
//     transition:color .5s ease-in-out; 
//     /* 서서히 색깔이 변화 */
// }

// .clicked{
//     color: tomato;
// }

// .sexy-font {
//     font-family: 'Courier New', Courier, monospace;
// }
// --------------------------


// *** Form submission
// const loginForm = document.getElementById("Login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// // "login-form" 이라는 id를 찾았고 그 찾은 것을 토대로
// // document가 아닌 loginform으로 더 정밀검색이 가능해짐 
// // 아래와 같은 코드임
// // const loginInput = document.querySelector("#login-form input");
// // const loginButton = document.querySelector("#login-form button");
// function handleLoginBtnClick(){
//     const username = loginInput.value;
//     console.log(username);

//     // if (username === "") {
//     //     alert("please write your name");
//     // } else if(username.length > 15) {
//     //     alert("Your name is too long ");
//     // }
//     // // console.log("hello", loginInput.value);
//     // ========================== HTML java가 아닌 html에 동일한 기능을 추가
// // input의 유효성 검사를 작동시키기 위해서는 input이 form안에 있어야 함 
// // form이 submit 되고 있기 때문에 
// {/* <form id="Login-form">
//     <input 
//     required 
//     maxlength="15" */}
// }
// // loginButton.addEventListener("click", handleLoginBtnClick);
// {/* <input type="submit" value="Login"> */}
// // 으로 인해 click에 집중할 필요가 없어짐 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css"/>
//     <title>Momentum</title>
// </head>
// <body>
//     <form id="Login-form">
//         <input 
//         required 
//         maxlength="15"  
//         type="text" 
//         placeholder="what is your name?"/>
//         <input type="submit" value="Login">
//         <!-- <button>Log In</button> --> 
//     </form>  
//     <script src="app.js"></script>
// </body>   
// </html>
// -----------------------------------------------------

// *** Events part Two
// const loginForm = document.querySelector("#Login-form");
// const loginInput = document.querySelector("#Login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event){
//     event.preventDefault();
//     // preventDefault function - 브라우저의 기본 동작을 막아줌(새로고침x)
//     // const username = loginInput.value;
//     console.log(loginInput.value);
// }

// function handleLinkClick(event){
//     event.preventDefault();
//     // link로 이동하는 것을 막아줌 
//     console.dir(event)
    
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// // submit은 엔터를 누르거나 버튼을 클릭할 때 발생
// // 브라우저는 우선 onLoginSubmit function을 호출하고,
// // onLoginSubmit() 괄호안에서 나한테 정보를 주고있음  
// // 이때 object를 argument로 주고있음 
// // object에는 방금 일어난 event에 대한 여러 정보가 담겨있음 
// // 즉 js가 어떤 정보를 담은 채로 function을 호출함
// // 브라우저는 브라우저 내에서 event로부터 정보를 잡아내서 
// // onLoginSubmit function 실행버튼을 누르고 있음 
// link.addEventListener("click",handleLinkClick)
// // object는 handleLinkClick을 위한 EventListener 함수의 첫번째 인자로 주어지게 될거임 
// // addEventListener 안에 있는 함수는 직접 실행하지 않음 브라우저가 해줌




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css"/>
//     <title>Momentum</title>
// </head>
// <body>
//     <form class="hidden" id="login-form" >
//         <input 
//         required 
//         maxlength="15"  
//         type="text" 
//         placeholder="what is your name?"/>
//         <input type="submit" value="Login">
//         <!-- <button>Log In</button> --> 
//     </form>  
//     <h1 id="greeting"class="hidden"></h1>
//     <script src="app.js"></script>
// </body>   
// </html>

// .hidden {
//     display: none;
// }



// // *** Getting Username / Saving Username
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
// const HIDDEN_CLASSNAME = "hidden"; 

// function onLoginSubmit(event){
//     event.preventDefault();
//     const username = loginInput.value;
//     localStorage.setItem("username", username)
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     greeting.innerText = "Hello " + username;
//     // string이랑 변수를 합치는 방법
//     // 아래와 같음 (기호 조심 - 백틱(`)으로 입력해야함)
//     // greeting.innerText = `Hello  ${username}`;
//     // 변수를 string 안에 포함시키는 방법
//     greeting.classList.remove(HIDDEN_CLASSNAME)
// }
// // hidden이라는 class name을 더해줘서 form을 숨기고 
// // 유저의 이름을 변수로 저장해주고, 그 이름은 h1 안에 넣어줌 


// loginForm.addEventListener("submit", onLoginSubmit);
// // localStorage - API
// // 브라우저에 뭔가를 저장할 수 있게 해줌 (미니 디비)
// // localStorage.setItem("username", "dongsup")
// // localStorage.getItem("username")
// // localStorage.removeItem("username")





// // // *** Loading Username

// local storage가 정보를 저장하고 불러오고 삭제하는 
// 브라우저가 가지고 있는 작은 DB같은 API
// 존재하는 정보에 대한 key를 검색하면 그 value를 string으로 바게됨
// // local storage에 username이 존재하는지 확인하고, form을 표시하지 않음
// // local storage에 유저정보가 없다면 form이 먼저 표시되도록
// // // localStorage.setItem("username", "dongsup")
// // // localStorage.getItem("username")
// // // localStorage.removeItem("username")

// // const loginForm = document.querySelector("#login-form");
// // const loginInput = document.querySelector("#login-form input");
// // const greeting = document.querySelector("#greeting");

// // const HIDDEN_CLASSNAME = "hidden"; 
// // const USERNAME_KEY = "username"

// // function onLoginSubmit(event){
// //     event.preventDefault(); // 새로고침 방지
// //     loginForm.classList.add(HIDDEN_CLASSNAME); // 다시숨겨줌
// //     const username = loginInput.value; // 입력값을 변수에 저장
// //     localStorage.setItem(USERNAME_KEY, username); // username값을 username이라는 key와 함께 local storage에 저장
// //     greeting.innerText = `Hello ${username}`; // 비어있는 h1 요소안에 텍스트 추가 
// //     greeting.classList.remove(HIDDEN_CLASSNAME); // "hidden" 제거
// // }

// // const savedUsername = localStorage.getItem(USERNAME_KEY);

// // if(savedUsername === null){ //local storage에서 username key를 찾을 수 없을 경우
// //     // show the form
// //     loginForm.classList.remove(HIDDEN_CLASSNAME);
// //     loginForm.addEventListener("submit", onLoginSubmit);
// // } else {
// //     // show the greetings
// //     greeting.innerText = `Hello ${savedUsername}`;
// //     greeting.classList.remove(HIDDEN_CLASSNAME);
// // }



// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden"; 
// const USERNAME_KEY = "username"

// function onLoginSubmit(event){
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     paintGreetings(username);
// }

// function paintGreetings(username){
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null){
//     // show the form
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
//     // 유저정보가 없다면 form의 submit을 기다림 
// } else {
//     // show the greetings
//     paintGreetings(savedUsername);
// }

// *** PadStart 
// const clock = document.querySelector("h2#clock");
// // intervals - 매번일어나야하는 무언가
// // timeout 

// function getClock() {
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2,"0");
//     const minutes = String(date.getMinutes()).padStart(2,"0");
//     const seconds = String(date.getSeconds()).padStart(2,"0");
//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);

// // setInterval - 원하는 초마다 재실행
// // setTimeout - 얼마나 기다려야할지

// // 현재 날짜 시간 가져오기
// // const date = new Date();
// // date.getDay()
// // date.getDate()

// // padStart() - string에 쓸 수 있는 function
// // "1".padStart(2,"0")
// // '01'
// // "1".padStart(3,"0")
// // '001'
// // "1".padStart(0,"0")
// // '1'
// // "1".padEnd(2,"0")
// // '10'

// // number이 아닌ㄴ text로 변환하는 법
// // new Date().getHours()
// // 21
// // String(new Date().getHours())
// // '21'