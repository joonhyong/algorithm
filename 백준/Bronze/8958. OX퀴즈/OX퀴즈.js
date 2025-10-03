// 백준 8958번 OX퀴즈
/*입력예제
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX*/
/*유도코드
첫번째 행은 테스트케이스 개수
두번째 행부터 마지막 행까지 행마다 아래의 작업 수행
1. 문자열.split("X")로 배열생성 -> 해당 배열은 요소는 "O"로 구성된 문자열 혹은 ""인 빈문자열로 구성됨.
2. 해당 배열의 요소를 하나씩 확인하여 "O"를 포함하고 있을 경우, 문제의 방식대로 채점 후 sum변수에 더함.
3. while문이 종료되면 sum을 출력
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  let sum = 0;
  const prob = input.shift();
  const probArr = prob.trim().split("X");
  while (!(probArr.length === 0)) {
    const ele = probArr.shift();
    if (ele.includes("O")) {
      for (let i = 1; i <= ele.length; i++) {
        sum += i;
      }
    }
  }
  console.log(sum);
}
