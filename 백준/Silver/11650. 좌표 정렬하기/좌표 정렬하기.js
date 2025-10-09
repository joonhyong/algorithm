// 백준 11650번 좌표 정렬하기
// 분류 : 정렬
/*입력예제
5
3 4
1 1
1 -1
2 2
3 3
*/
/*유도코드
(1)
각 행을 배열 형태의 요소로 갖는 배열을 생성 -> 2차원 배열
요소의 0번째 인덱스를 기준으로 정렬
만약 0번째 인덱스의 값이 같다면 1번째 인덱스의 값을 기준으로 정렬
정렬의 방향은 오름차순으로 한다.
(2)
각 행을 요소로 갖는 배열 생성
해당 요소를 정렬
배열.join("\n")으로 출력
*/
/* 알게 된 점 + 공부해야 할 점
1. console.log()는 최소화해야 시간초과를 예방할 수 있다.
2. 배열을 불필요하게 남용하지 말자. -> 입력예제를 문자열 그대로 활용해보기 (안될때 배열로 변환)
3. 시간초과가 날 수 있는부분
3-1. 입력처리 부분 -> shift()접근X/인덱스접근O
3-2. 출력처리 부분 -> 출력대상 배열에 반복문X/join(" ")O
3-3. 정렬처리 부분 -> 정렬알고리즘X/내장함수sort()O
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
const arr = [];
// for (let i = 0; i < N; i++) {
//   const xy = input.shift().split(" ").map(Number);
//   arr.push(xy);
// }
for (let i = 0; i < N; i++) {
  const xy = input[i].split(" ").map(Number);
  arr.push(xy);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(arr[i].join(" "));
}

console.log(answer.join("\n"));
