const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
// 백준 10872번 팩토리얼
const n = Number(input);
function fac(d) {
  if (d <= 1) {
    return 1;
  }
  return d * fac(d - 1);
}
console.log(fac(n));
