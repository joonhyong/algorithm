const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input[0];
let arr = [];
arr = input[1].split(" ").map(Number);
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min, max);