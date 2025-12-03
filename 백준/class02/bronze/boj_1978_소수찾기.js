// 백준 1978번 소수 찾기
// 분류 : 수학, 정수론
/*입력예제
4
1 3 5 7
*/
/*유도코드
각 요소마다 소수 판단 검사를 아래의 과정으로 수행
1. 해당 수가 1이면 패스
2. 해당 수가 2이거나 3이면 cnt++
3. 해당 수가 짝수라면 패스
4. 해당 수가 홀수라면 3부터 제곱근까지 나눠보고 모두 나누어 떨어지지 않는다면 cnt++ 
/* 알게 된 점 + 공부해야 할 점
1. 해당수가 홀수이면 전부 4번째 분기점에 판별이 되므로, 3인지 확인할 필요 없음.
2. 소수판별 함수를 작성하면 코드가 간결해짐.
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);
let cnt = 0;
outer: for (let i = 0; i < N; i++) {
  const num = numbers.shift();
  if (num === 1) continue;
  else if (num === 2 || num === 3) cnt++;
  else if (num % 2 === 0) continue;
  else {
    let wrong = 0;
    for (let j = 3; j <= Math.floor(num ** 0.5); j += 2) {
      if (num % j === 0) {
        wrong = 1;
        break;
      }
    }
    if (wrong === 0) {
      cnt++;
    }
  }
}
console.log(cnt);
