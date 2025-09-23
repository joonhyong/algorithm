// 백준 2439번 별찍기2
/*입력예제
5
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input);

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }
  for (let k = 1; k <= i; k++) {
    line += "*";
  }
  console.log(line);
}
