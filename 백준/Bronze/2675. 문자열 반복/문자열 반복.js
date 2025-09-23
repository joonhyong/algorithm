// 백준 2675번 문자열 반복
/*입력예제
2
3 ABC
5 /HTP
*/
/*유도코드
(1) 문자열 인덱싱 + for문
문자열을 배열로 변환
각각의 인덱스별로 for문으로 반복된 새로운 문자열을 생성
각각의 인덱스를 합쳐서 출력
(2) repeat() 메서드
반복대상 문자열을 배열로 변환
배열의 각 요소에 repeat() 호출하여 
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = Number(input.shift());

// for (let i = 0; i < T; i++) {
//   const [n, str] = input.shift().split(" ");
//   let answer = "";
//   for (let j = 0; j < str.length; j++) {
//     for (let k = 0; k < n; k++) {
//       answer += str[j];
//     }
//   }
//   console.log(answer);
// }

for (let i = 0; i < T; i++) {
  const [n, str] = input.shift().split(" ");
  let answer = "";
  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(n);
  }
  console.log(answer);
}
