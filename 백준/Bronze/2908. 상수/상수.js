const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let str = input.toString().trim();

str = str.split("").reverse().join(""); // 문자열 뒤집기
let arr = str.split(" ");
let answer = Math.max(...arr);
console.log(answer);
