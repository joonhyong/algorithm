// 백준 2292번 벌집
// 분류 : 정렬, 집합과 맵
/*입력예제
3
21 Junkyu
21 Dohyun
20 Sunyoung
*/
/*유도코드

*/
/* 알게 된 점 + 공부해야 할 점
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());

// let map = new Map();
// for (let i = 0; i < N; i++) {
//   const person = input.shift().trim().split(" ");
//   map.set(Number(person[0]), person[1]);
// }
// console.log(map);

const people = [];
for (let i = 0; i < N; i++) {
  const person = input.shift().trim().split(" ");
  person[0] = Number(person[0]);
  people.push(person);
}

people.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < N; i++) {
  console.log(people[i][0], people[i][1]);
}
