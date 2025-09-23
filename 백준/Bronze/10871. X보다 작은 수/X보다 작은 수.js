// 백준 10871번 X보다 작은수
/*입력예제
10 5
1 10 4 9 2 3 8 5 7 6
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, X] = input.shift().split(" ").map(Number);
const numbers = input.shift().split(" ").map(Number);
const answer = [];
numbers.forEach((num) => {
  if (num < X) {
    answer.push(num);
  }
});
console.log(answer.join(" "));
