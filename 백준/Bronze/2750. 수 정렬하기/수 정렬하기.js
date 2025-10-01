// 백준 2750번 수 정렬하기
// 유형 : 브루트포스
/* 입력예제
5
5
2
3
4
1
*/
/* 유도코드
input 데이터를 입력받은 배열을 정렬
for문으로 순차출력
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input.shift();
const arr = [];
while (!(input.length === 0)) {
  arr.push(Number(input.shift()));
}

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
