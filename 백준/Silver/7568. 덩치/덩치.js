// 백준 7568번 덩치
// 분류 : 정렬
/*입력예제
5
55 185
58 183
88 186
60 175
46 155
*/
/*유도코드

 */
/* 알게 된 점 + 공부해야 할 점

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

// 각 사람들의 키, 체중 배열을 요소로 갖는 배열 생성
const arr = [];
for (let i = 0; i < N; i++) {
  const person = input.shift().trim().split(" ").map(Number);
  arr.push(person);
}

// 정답 배열 생성
const answer = [];
// 측정할 사람
for (let i = 0; i < N; i++) {
  let cnt = 0;
  // arr 배열 내에서 자기자신을 제외한 사람들과 키, 체중 비교
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      cnt++;
    }
  }
  // 등수 요소를 정답 배열에 추가
  answer.push(cnt + 1);
}

console.log(answer.join(" "));
