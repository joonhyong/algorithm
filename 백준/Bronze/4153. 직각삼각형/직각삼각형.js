// 백준 4153번 직각삼각형
/*입력예제
6 8 10
25 52 60
5 12 13
0 0 0
*/
/*유도코드
입력예제 행 마다 공백을 기준으로 나눈 값들을 요소로 갖는 배열 생성 
배열을 오름차순 정렬
첫번째 요소와 두번째 요소의 비율이 3:4 이고
두번째 요소와 세번째 요소의 비율이 4:5 이면 "right" 출력.
그렇지 않다면 "wrong" 출력 
*/
/* 알게 된 점 혹은 공부해야 할 점

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

while (1) {
  const arr1 = input.shift().split(" ").map(Number);

  if (arr1[0] === 0 && arr1[1] === 0 && arr1[2] === 0) {
    break;
  }

  arr1.sort((a, b) => a - b);
  arr2 = arr1.map((n) => n ** 2);

  if (arr2[0] + arr2[1] === arr2[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
