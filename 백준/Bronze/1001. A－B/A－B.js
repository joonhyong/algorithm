const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let [A, B] = input.toString().split(" ").map(Number);

console.log(A - B);
