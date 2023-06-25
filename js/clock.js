const clock = document.querySelector("h2#clock")

//interval : 매번 일어나야 하는 무언가를 말한다.
function getClock() {
   const date = new Date();
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");

   clock.innerText = `${hours}:${minutes}:${seconds}`;
}
/*date의 기능
1)new Date() : //Mon Jun 12 2023 18:03:10 현재 시간과 날짜를 나타냄
2)date.getHours :현재시간
3)date.getMinutes :분
4)date.getSeconds:초
2+3+4를 해서 매초마다 시간을 나타내는 Date object를 생성할 수 있다.*/
getClock();
//웹사이트가 실행되자마자 바로 시계기능이 가능하도록 호출한다.
setInterval(getClock, 1000);
//5초마다 호출이 진행된다.


//padStart() : 원하는 방식으로 출력될 수 있도록 앞쪽에 문자열을 추가한다. <->padEnd()
//"1",padStart(2,"0") : 두 자리수가 아닐경우에 앞에 '0'을 추가한다.
//String(num) : number -> string으로 바꿔줌

//homework : 명언 10개 수집