const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//JSON.stringify: 어떤 것이든 string화 시켜준다.
//JSON.parse():string을 배열로 바꿔준다.

//event.target을 사용하면 현재 이벤트가 발생한 요소의 속성들을 얻을 수 있다.
//Dom 객체이기 때문에 변경을 주고 싶다면 Dom메소드를 사용해야 한다.
//button 속성의 부모요소로 li를 가르킨다.
function deleteToDo(event) {
const li = event.target.parentElement;
toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
saveToDos();
li.remove();
}
//toDo.id !== parseInt(li.id) 터압이 달라서 작동이 제대로 하지않아 같은 넘버타입으로 변경 
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = '✖️';
    button.style.backgroundColor = "transparent";
    button.style.border = "none";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li)
    
}
/* 삭제기능도 가능하도록:span을 만들어서 li 내부에 자식으로 넣음 그 다음에 new ToDo에 입력받은 값을 span내부에 넣음 */

function handleToDoSubmit(event) {
    event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value = "";
const newTodoObj = {
    text:newTodo,
    id: Date.now(),
}
toDos.push(newTodoObj);
paintToDo(newTodoObj)
saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos =localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

}
//JS는 배열에 있는 각각의 아이템들에 대해 functio할 수 있게 해준다.
//toDoInput.value = "";(enter 히면 칸을 빈화면으로 비우도록 만든다.)
//filter function -> new array
/* const arr = [1,2,3,4]
   arr.filter(item => item > 2 )
   [3,4] 
   const newArr = arr.filter (item =>item >2 )
   arr 
   [1,2,3,,4]
   newArr 
   [3,4]
   기존의 배열을 변경시키는것이 아니라 새로운 배열을 만들어냄.*/