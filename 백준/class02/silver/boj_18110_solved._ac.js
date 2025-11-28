// 백준 18110번 solved.ac
// 분류 : 완전탐색
/*입력예제
5
1
5
5
8
7

*/
/*유도코드
    - n: 참여 인원 수 
    - 만약 n이 0이라면 answer = 0 출력
    - n이 0이 아니라면 아래의 과정을 수행
        1. arr: 배열의 길이가 n이고, 각 인원들의 난이도를 요소로 가지며, 오름차순으로 정렬된 배열
        2. 30% 절사평균: 위 아래로 15%씩 제거 
            - k = Math.round(n*0.3/2)
            - 위 아래로 k번씩 빼면됨
        3. arr와 k를 구했다면, 아래의 과정을 수행
            1. for문으로 arr의 k번째 인덱스 부터 n-1-k번째 인덱스까지의 합인 sum 구하기
            2. sum을 n-2k로 나누어 절사평균 구하기
        4. arr 요소들의 평균값을 반올림하여 출력
*/
/* 알게 된 점 + 공부해야 할 점
    1. 일부 예제에서 시간초과 발생 -> shift() 연산 때문일 것
        - 따라서 인덱스를 통해 연산
        - shift()연산을 안써도됨 + arr를 가공하지 않은 상태로 바로 평균 구하기 가능

    2. n === 0인 경우를 고려하지 않음
        - 알고리즘 도입부에 n === 0인 경우는 처리하는 코드 작성
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input[0]);
let answer = 0;

if (n === 0) console.log(answer);
else {
  const arr = [];

  // 1. 30% 절사평균으로 위 아래에서 뺄 인원수 k 계산
  const k = Math.round(n * 0.15);

  // 2. 난이도를 요소로 갖는 배열 arr 생성 및 정렬
  for (let i = 1; i <= n; i++) {
    const num = Number(input[i].trim());
    arr.push(num);
  }
  arr.sort((a, b) => a - b);

  // 3. arr의 요소들의 평균값을 반올림하여 구하기
  // -> arr배열의 0+k번째 인덱스부터 n-1-k번째 인덱스까지의 난이도 평균
  let sum = 0;
  for (let i = k; i < n - k; i++) {
    sum += arr[i];
  }
  answer = Math.round(sum / (n - 2 * k));

  console.log(answer);
}
