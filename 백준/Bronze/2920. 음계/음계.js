// 백준 2920번 음계
/*입력예제
1 2 3 4 5 6 7 8
*/
/*유도코드

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const arr = input.shift().split(" ").map(Number);
let answer = "";
let ascCnt = 0;
let desCnt = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] + 1 === arr[i + 1]) {
    ascCnt++;
    continue;
  } else if (arr[i] - 1 === arr[i + 1]) {
    desCnt++;
    continue;
  }
}

if (ascCnt === 7) {
  answer = "ascending";
} else if (desCnt === 7) {
  answer = "descending";
} else {
  answer = "mixed";
}

console.log(answer);
