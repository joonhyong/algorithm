// 백준 10998번 AxB
/*입력예제
3 4
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);
const answer = A * B;
console.log(answer);
