// 백준 2562번 최댓값
/*입력예제
5
20 10 35 30 7
*/
/*유도코드
- Math 내장객체 사용
입력예제를 저장하는 배열 생성
배열에서 최댓값, 최솟값 추출
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);

const maxNum = Math.max(...numbers);
const minNum = Math.min(...numbers);
console.log(minNum+" "+maxNum);
