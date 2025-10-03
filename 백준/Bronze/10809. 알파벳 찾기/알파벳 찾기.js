// 백준 10809번 알파벳 찾기
// 유형 : 구현, 문자열
/* 입력예제
baekjoon
 */
/* 유도코드

 */
/* 알게 된 점 혹은 공부해야 할 점
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const alphabetStr = "abcdefghijklmnopqrstuvwxyz";

const S = input.toString().trim();
let answerArr = [];
for (let i = 0; i < alphabetStr.length; i++) {
  const aplphabet = alphabetStr[i];
  const idx = S.indexOf(aplphabet);
  answerArr.push(idx);
}
console.log(answerArr.join(" "));
