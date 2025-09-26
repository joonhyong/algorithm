// 백준 2675번 문자열 반복
/*입력예제
150
266
427
*/
/*유도코드
A, B, C 값 할당
A*B*C의 값을 각자리 숫자들을 요소로 갖는 배열로 반환
길이가 10이고 각 요소가 0인 배열 선언
첫번째 배열의 요소를 순차적으로 확인하면서 
해당 요소를 인덱스로 갖는 두번째 배열의 요소를 ++
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const A = input.shift();
const B = input.shift();
const C = input.shift();
const mul = A * B * C;
const numList = mul.toString().split("").map(Number);
const answerList = Array(10).fill(0);

for (let i = 0; i < numList.length; i++) {
  answerList[numList[i]]++;
}

for (let i = 0; i < answerList.length; i++) {
  console.log(answerList[i]);
}
