// 백준 1152번 단어의 개수
const fs = require("fs");
const { isArray } = require("util");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let str = input.toString().trim();
let arr = str.split(" ");
let answer = 0;

if (str === "") {
  answer = 0;
  console.log(0);
} else {
  arr = str.split(" ");
  answer = arr.length;
  console.log(answer);
}
