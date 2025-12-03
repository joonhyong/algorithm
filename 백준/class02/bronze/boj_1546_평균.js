// 백준 1546번 평균
// 분류 : 수학 사칙연산
/*입력예제
3
40 80 60
*/
/*유도코드
입력예제의 첫째항을 N에 할당 -> 인덱스로 할당
두번째항의 값들을 길이가 N인 배열에 할당 -> 인덱스로 반복문을 사용하여 할당

*/
/* 알게 된 점 + 공부해야 할 점
Math객체의 max, min 메서드에는 배열을 인자로 받지 않음 -> 전개 연산자를 통해 인자 할당
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input[0];
const arr = input[1].split(" ").map((x) => Number(x));
const maxNum = Math.max(...arr);

for (let i = 0; i < N; i++) {
  arr[i] = (arr[i] / maxNum) * 100;
}

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += arr[i];
}

console.log(sum / N);
