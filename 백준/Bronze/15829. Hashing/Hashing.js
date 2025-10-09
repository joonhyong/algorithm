// 백준 15829번 Hashing
// 분류 : 구현, 문자열, 수학
/*입력예제
5
abcde
*/
/*유도코드
소문자 a~z까지의 문자열 alphabet 생성
입력예제의 2번째 행을 문자열로 받아옴.
해당 문자열의 각 자리의 문자들을 요소로 갖는 str배열 생성.
중첩 반복문
외부 반복문 : astr 배열의 요소들을 하나씩 순회
내부 반복문
1. 해당 요소를 alpahbet 문자열 내 요소들을 순회하며 하나씩 비교
2. 같은걸 발견할 경우 내부반복문의 j+1한 값을 arr배열에 추가 
*/
/* 알게 된 점 + 공부해야 할 점
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const L = Number(input.shift());
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const str = input.shift().split("");
const arr = [];

for (let i = 0; i < L; i++) {
  for (let j = 0; j < 26; j++) {
    if (str[i] === alphabet[j]) {
      arr.push(j + 1);
    }
  }
}

let sum = 0;
const r = 31;
const M = 1234567891;
for (let i = 0; i < L; i++) {
  sum += arr[i] * r ** i;
}
const answer = sum % M;
console.log(answer);
