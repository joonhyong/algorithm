// 백준 2753번 윤년
/*입력예제
100
*/
/*유도코드

 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
let answer = "";

if (N >= 90 && N <= 100) {
  answer = "A";
  console.log(answer);
} else if (N < 90 && N >= 80) {
  answer = "B";
  console.log(answer);
} else if (N < 80 && N >= 70) {
  answer = "C";
  console.log(answer);
} else if (N < 70 && N >= 60) {
  answer = "D";
  console.log(answer);
} else {
  answer = "F";
  console.log(answer);
}
