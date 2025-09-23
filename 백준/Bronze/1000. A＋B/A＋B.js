// 백준 1000번 A+B
/*입력예제
1 2
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let [A, B] = input.toString().split(" ").map(Number);
const answer = A + B;
console.log(answer);
