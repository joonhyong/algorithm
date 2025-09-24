// 백준 31403번 A+B-C
/*입력예제
3
4
5
*/
/*유도코드
 *
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const A = input.shift().trim();
const B = input.shift().trim();
const C = input.shift().trim();

// A,B,C가 숫자형
const answer1 = Number(A) + Number(B) - Number(C);

// A,B,C가 문자열
const answer2 = Number(A + B) - Number(C);

console.log(answer1);
console.log(answer2);
