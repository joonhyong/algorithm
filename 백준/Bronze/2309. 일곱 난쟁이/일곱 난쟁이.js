// 백준 2309번 일곱 난쟁이
// 유형 : 브루트포스, 정렬
/* 입력예제
20
7
23
19
10
15
25
8
13
*/
/* 유도코드
조합은 뽑을 숫자 배열의 인덱스 순으로 뽑는다.
따라서 처음부터 정렬을 하고 조합을 뽑는다면 마지막에 오름차순으로 정렬되어 있다.
9명 중 7명씩 조합을 추출해내서 합이 100인지 확인.
100인 경우 재귀함수를 return하여 종료
*/
/* 더 알고싶은 점

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const before = [];
const after = [];
const answer = [];
while (!(input.length === 0)) {
  let num = Number(input.shift());
  before.push(num);
}
before.sort((a, b) => a - b);

let sum = 0;
function combi(d, s) {
  if (d === 7) {
    sum = 0;
    for (let j = 0; j < 7; j++) {
      sum += after[j];
    }
    if (sum === 100) {
      for (let k = 0; k < 7; k++) {
        answer[k] = after[k];
      }
    }
    return;
  }
  for (let i = s; i < 9; i++) {
    after[d] = before[i];
    combi(d + 1, i + 1);
  }
}

combi(0, 0);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
