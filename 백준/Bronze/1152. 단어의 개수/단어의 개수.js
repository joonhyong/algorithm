// 백준 1152번 단어의 개수
/*입력예제
 The first character is a blank
*/
/*유도코드
입력예제는 trim()으로 앞뒤 공백은 제거된 상태로 들어옴.
입력예제를 문자열 line으로 변환
line을 공백에 따라 나눈 배열로 변환
단, 빈문자열 ""도 배열에는 요소로 들어가므로 조건문으로 답이 0이 되도록 해주기.
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const line = input.toString().trim();

let answer = 0;

if (line === "") answer = 0;
else answer = line.split(" ").length;

console.log(answer);
