const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 2739번 구구단

dan = Number(input);
for (let j = 1; j <= 9; j++) {
  console.log(dan + " * " + j + " = " + input * j);
}
