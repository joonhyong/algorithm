// 백준 1259번 펠린드롬수
// 분류 : 구현, 문자열
/*입력예제
121
1231
12421
0
*/
/*유도코드
while문으로 입력예제 반복
break조건 : input[i] === 0 

const str = input[i]
if 조건 : 문자열.length의 짝수여부
짝수
-> front = str.slice(0,str.length/2+1)
-> rear = str.slice(str.length/2)
홀수
-> front = str.slice(0,Math.ceil(str.length/2))
-> rear = str.slice(Math.ceil(str.length/2+1))

if 조건 : front === rear.split("").reverse().join("")
참 : yes 출력
거짓 : no 출력
*/
/* 알게 된 점 + 공부해야 할 점
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let i = 0;
for (let i = 0; i < input.length - 1; i++) {
  const str = input[i].trim();
  const half = Math.floor(str.length / 2);
  let front = "";
  let rear = "";
  if (str.length % 2 === 0) {
    front += str.slice(0, half);
    rear += str.slice(half);
  } else {
    front += str.slice(0, half);
    rear += str.slice(half + 1);
  }
  if (front === rear.split("").reverse().join("")) console.log("yes");
  else console.log("no");
}
