// 백준 2753번 윤년
/*입력예제
2000
*/
/*유도코드

 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

if ((N % 4 === 0 && N % 100 !== 0) || N % 400 === 0) {
  console.log(1);
} else console.log(0);
