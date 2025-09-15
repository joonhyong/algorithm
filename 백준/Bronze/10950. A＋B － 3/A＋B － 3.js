const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = input[0];
function add(A, B) {
  let sum = A + B;
  return sum;
}
for (let i = 1; i <= T; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  let answer = add(A, B);
  console.log(answer);
}
