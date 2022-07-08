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