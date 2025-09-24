// 백준 11654번 아스키 코드
/*입력예제
A
*/
/*유도코드
 * 자바에서는 char타입에 아스키코드값으로 저장됨.
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let str = input.shift();

const answer = str.charCodeAt();

console.log(answer);
