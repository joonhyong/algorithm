const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input);
let cnt = 0;
for (let i = 5; i <= N; i += 5) {
  if (i % 125 === 0) cnt += 3;
  else if (i % 25 === 0) cnt += 2;
  else if (i % 5 === 0) cnt += 1;
}
console.log(cnt);
