// 백준 10814번 나이순 정렬
// 분류 : 정렬, 집합과 맵
/*입력예제
3
21 Junkyu
21 Dohyun
20 Sunyoung
*/
/*유도코드
2차원 배열 생성.
내부 배열은 각 행의 내용을 공백으로 구분하여 요소로 갖는 person배열.
외부 배열은 위의 내부 배열들을 요소로 갖는 people 배열.
내부배열의 0번째 인덱스를 기준으로 오름차순 정렬.
people 배열의 요소를 순차적으로 출력.
이때 people 배열 내의 요소들은 console.log내에 공백을 사이에 두고 출력
*/
/* 알게 된 점 + 공부해야 할 점
1. map, set 자료구조 다루기.
2. 정렬할 때 sort()메서드 내의 함수 작성하는 방법, 원리 이해하기.
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
