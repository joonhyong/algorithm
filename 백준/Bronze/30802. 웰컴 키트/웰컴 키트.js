// 백준 4153번 직각삼각형
// 분류 : 구현, 수학
/*입력예제
23
3 1 4 1 5 9
5 7
*/
/*유도코드
티셔츠는 남아도됨. 펜은 정확히 참가수 수만큼 있어야함.
T장씩 몇묶음 = 신청자수가 가장 많은 사이즈
P자루씩 몇묶음 = Math.floor(N/P)
한자루씩 몇개 = N%P
*/
/* 알게 된 점 혹은 공부해야 할 점
문제에서 제공하는 조건, 결과값을 추출하는 능력기르기
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const participant = input.shift().split(" ").map(Number);
const [T, P] = input.shift().split(" ").map(Number);

let totalTOrder = 0;
for (let i = 0; i < participant.length; i++) {
  const tOreder = Math.ceil(participant[i] / T);
  totalTOrder += tOreder;
}

const pOrderBundle = Math.floor(N / P);
const pOrder = N % P;

console.log(totalTOrder);
console.log(pOrderBundle, pOrder);
