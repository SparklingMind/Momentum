/*quotes:*/
const quotes = [
{
quote: "나는 실패한 적이 없어. 단지 10,000번 도전해보고 어떤 것이 동작하지 않는지 알 뿐이지.",
author:"<슬램덩크>",
},
{
quote: "마음이 진정되면 그 소리를 들을 수 있다.",
author: "<센과 치히로의 행방불명>",
},
{
quote: "상처는 상쾌하다. 그건 나를 강하게 만들어준다",
author: "<도라에몽>",
},
{
quote: "꿈은 흔들릴 수 있지만, 포기하면 결코 이루어질 수 없다.",
author: "<너의 이름은>",
},
{
quote: "인생은 한 방! 두 번 다시는 없어!",
author: "<일상>",
},
{
quote: "미래에 대한 고민은 지금 재능을 묻는 것이다.",
author: "<하이큐>",
},
{
quote: "마음에 불이 있어야 불이 번지는 법이지!",
author: "<귀멸의 칼날>",
},
{
quote: "가장 중요한 건 네 안의 힘이다.",
author: "<나루토>",
},
{
quote: "우리는 혼자가 아니야, 언제나 옆에 네가 있다는 걸 알아.",
author: "<반지의 제왕>",
},
{
quote: "마음이 움직여야 운명도 움직인다.",
author: "<풀메탈 알케미스트>",
}
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//randomness(무작위성): array 안에 element에 접근하기.
//console.log(quotes[10 - 1]); 마지막 요소에 접근 .
/*Math.random():between 0 ~ 1.
  Math.round():반올림
  Math.ceil():올림
  Math.floor():내림*/
