// 백준 10250번 ACM 호텔
/*입력예제
2
6 12 10
30 50 72
*/
/*유도코드
(1) 사칙연산 : %와 // 사용
층수 === n%h
호수 === n//h 
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

// (1) 사칙연산 %와 // 사용
T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let [h, w, n] = input.shift().split(" ").map(Number);
  let floor = 0,
    room = 0,
    answer = "";

  // 층수
  if (n % h === 0) {
    floor = h;
  } else floor = n % h;

  // 호수
  if (n % h === 0) {
    room = Math.floor(n / h);
  } else room = Math.floor(n / h) + 1;

  // 방번호
  if (room < 10) {
    answer = String(floor) + "0" + String(room);
  } else answer = String(floor) + String(room);

  console.log(answer);
}
