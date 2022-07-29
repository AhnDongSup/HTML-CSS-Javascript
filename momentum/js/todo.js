const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// from과 ul를 HTML에서 JavaScript로 가져감

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //toDos array를 localStorage에 집어넣는 역할 
    // JavaScript object 나 array나 어떤 것이든 string으로 바꿔주는 기능
    // JSON.stringify(toDos)
    // 여기까지는 그냥 string으로 바꿔주는 작업
    // 여기서 실제로 동작하는 array로 변환하기 위해서는 
    // JSON.parse(localStorage.getItem("todos")) 를 하면 됨 
    // 이로써 array에 있는 각각의 item에 대해서 function을 실행할 수 있음
}

function deleteToDO(event){
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    // toDos = toDos.filter((toDo) => toDo.id  !== li.id);
    // 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶을 때 
    // li.id는 string타입이고 toDo.id는 number타입인데
    // 서로 다른 타입이라 아무것도 지워지지 않음
    toDos = toDos.filter((toDo) => toDo.id  !== parseInt((li.id)));
    saveToDos();


    // console.dir(event.target.parentElement.innerText);
    // 클릭된 위치를 체크
    // event에 대한 유용한 정보를 얻고자하지만 그러기 어려울 때 
    // evevt.target을 살펴봐야함
    // target - 클릭된 HTML element
    // parentElement - 클릭된 element의 부모
    // 모든 HTMl element 에는 하나 이상의 property가 있음 
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener('click',deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //console.log(li);
    //<li>
    //    <span>qwe</span>
    //</li>
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    

    
}

toDoForm.addEventListener("submit", handleToDoSubmit);




const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // forEach - function을 실행하게 해줌
    // array에 있는 각각의 item에 대해서 실행해줌 
    // submit eventListener가 event(argument)를 그냥 제공해주는 것처럼 
    // Javascript는 지금 처리되고 있는 item 또한 그냥 제공해주는데
    // 만약 function에 argument값을 이용하면 
    // array의 각 item에 대해 function을 실행하게 되는 것을 확인 할 수 있음
    // forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행함

    // forEach의 기능 중 하나로 function을 만들지 않아도 되는 화살표 함수 방법도 있음 
    // function sayHello(item) {
    //     console.log("this is the turn of ",item);
    // }
    // parsedToDos.forEach(sayHello); -> parsedToDos.forEach((item) => console.log("this is the turn of ",item));
}


// filter function - 지우고 싶은 item을 제외하고 새 array를 만듦
// 아래는 function을 선언하는 작업을 할 필요 x
// const arr = [1,2,3,4]
// arr.filter(item => item > 2)
// (2) [3, 4]

// const newArr = arr.filter(item => item > 2)
// arr
// (4) [1, 2, 3, 4]
// newArr
// (2) [3, 4]

// array의 item을 유지하고 싶으면 true를 리턴해야 됨
// function sexyFilter(item){return item !== 3}
// [1,2,3,4,5,6].filter(sexyFilter)
//  > [1, 2, 4, 5, 6]
// Javascript가 array의 각 item을 sexyFuction의 첫번째 인자로 전달해줌

