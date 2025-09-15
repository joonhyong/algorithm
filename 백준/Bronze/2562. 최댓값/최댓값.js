const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const max = Math.max(...input);
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] == max) {
    cnt++;
    break;
  } else {
    cnt++;
    continue;
  }
}

console.log(max);
console.log(cnt);
