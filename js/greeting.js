const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";
// 중복되는 값은 변수를 선언해줘서 실수를 줄이도록 한다.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}


function paintGreetings(username){
  greeting.innerText = `#${username} 레이서님 안녕하세요.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //value값을 기억해서 아웃풋 해주고 , 새로고침을 누르면 인사말은 사라고 다시 로그인창이 나온다.
}
//중복되는 식을 제거하기 위해 , 함수로 만들어주고 함수호출 하는 형식으로 사용한다.
//같은 함수라도 호출되는 시점에 따라 매개인자는 달라진다.
const savedUsername = localStorage.getItem("USERNAME_KEY");
console.log(savedUsername)// null 결과값
//logic짜기 
if(savedUsername === null){
 loginForm.classList.remove(HIDDEN_CLASSNAME);
 loginForm.addEventListener("submit",onLoginSubmit);
  //show the form
} else {
  paintGreetings(savedUsername)

}

//1.localStrage.setItem('mycat','tom)<- key .value local storage에 정보를 저장할 수 있다.
//2.local storage.remove('mycat') 저장한 내용삭제 가능.
//3.localStorage.getItem("username") 유저네임 기록 유무 확인.