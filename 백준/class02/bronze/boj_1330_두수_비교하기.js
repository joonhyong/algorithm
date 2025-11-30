// 백준 1330번 두 수 비교하기
/*입력예제
1 2
*/
/*유도코드

 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let [A, B] = input.shift().split(" ").map(Number);
let answer = "";

if (A > B) {
  answer = ">";
  console.log(answer);
} else if (A < B) {
  answer = "<";
  console.log(answer);
} else if (A === B) {
  answer = "==";
  console.log(answer);
}
