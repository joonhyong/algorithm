// 백준 10951번 A+B-4
/*입력예제
1 1
2 3
3 4
9 8
5 2
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

// while문은 shift()메서드로 접근
while (input.length > 0) {
  let [A, B] = input.shift().split(" ").map(Number);
  console.log(A + B);
}

// for문은 인덱스로 접근
// for (let i = 0; i < input.length; i++) {
//   let [A, B] = input[i].split(" ").map(Number);
//   console.log(A + B);
// }
