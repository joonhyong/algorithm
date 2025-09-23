// 백준 2562번 최댓값
/*입력예제
1 3
*/
/*유도코드

 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let [A, B] = input.shift().split(" ").map(Number);
const answer = A / B;
console.log(answer);
