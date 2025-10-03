// 백준 3052번 나머지
/*입력예제
1
2
3
4
5
6
7
8
9
10
*/
/*유도코드
입력예제를 숫자형 데이터로 arr 배열에 저장
arr 배열내의 요소들을 42로 나눈 나머지의 값들을 reamains 배열에 저장
remains 배열을 집합으로 변환
해당 집합의 size를 출력
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const arr = input.map(Number);

const remains = [];

for (let i = 0; i < arr.length; i++) {
  remains.push(arr[i] % 42);
}

const remainsSize = new Set(remains);
console.log(remainsSize.size);
