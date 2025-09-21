const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input);

function fibo(d) {
  if (d === 0) {
    return 0;
  }
  if (d === 1 || d === 2) {
    return 1;
  }
  return fibo(d - 1) + fibo(d - 2);
}

console.log(fibo(n));
