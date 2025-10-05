// 백준 2751번 수 정렬하기 2
// 분류 : 정렬
/*입력예제
5
5
4
3
2
1
*/
/*유도코드

*/
/* 알게 된 점 + 공부해야 할 점
못품 -> 시간초과
1. console.log가 많으면 시간초과 가능성
   -> console.log를 최소화 (결과값 자체에 줄바꿈 포함시키기)
2. shift()연산 줄이기
   -> input배열 내 요소들을 새로운 배열에 넣을때 반복문이 아닌 map 함수 활용하기
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = Number(input.shift());
const numbers = input.map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers.join("\n"));
