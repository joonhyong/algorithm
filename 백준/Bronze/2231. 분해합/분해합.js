// 백준 2231번 분해합
// 유형 : 브루트포스
/* 입력예제
216
*/
/* 유도코드

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

function create(n) {
  const arr = n.toString().split("").map(Number);
  let answer = n;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

let i = 1;
let answerList = [];
// while (1) {
//   let a = create(i);
//   if (a === N) {
//     answrList.push(i);
//     break;
//   }
//   i++;
// }

for (let i = 1; i <= N; i++) {
  if (create(i) === N) {
    answerList.push(i);
  }
}

if (answerList.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...answerList));
}
