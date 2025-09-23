// 백준 2475번 검증수
/*입력예제
0 4 2 5 6
*/
/*유도코드

 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const numbers = input.shift().split(" ").map(Number);
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] ** 2;
}

const answer = sum % 10;
console.log(answer);
