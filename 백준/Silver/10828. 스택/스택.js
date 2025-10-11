// 백준 10828번 스택
// 분류 : 구현, 자료구조, 스택
/*입력예제
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top*/
/*유도코드
배열을 구현하고 메서드를 적절하게 사용하여 스택처럼 다루기
1. push n : n을 stack에 push()
2. pop : stack의 가장 마지막(위) 요소를 빼고 출력. 스택이 비어있으면 -1 출력.
3. size : 스택에 들어있는 정수의 개수 출력.
4. empty : 스택이 비어있으면 1출력. 비어있지않으면 0출력.
5. top : 스택의 가장 위에 있는 정수를 출력. 스택이 비어있으면 -1을 출력.
*/
/* 알게 된 점 + 공부해야 할 점
스택의 역할을 수행하는 클래스를 구현하기
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0], 10);
const stack = [];

// let cnt = 0;
// let clgCnt = 0;

// for (let i = 1; i <= N; i++) {
//   // push n
//   if (input[i].slice(0, 5) === "push ") {
//     stack.push(input[i][5]);
//   }
//   // pop
//   else if (input[i].trim().slice(0, 5) === "pop") {
//     if (stack.length) {
//       console.log(stack[stack.length - 1]);
//       stack.pop();
//     } else {
//       console.log(-1);
//     }
//     clgCnt++;
//   }
//   // size
//   else if (input[i].trim().slice(0, 5) === "size") {
//     console.log(stack.length);
//     clgCnt++;
//   }
//   // empty
//   else if (input[i].trim().slice(0, 5) === "empty") {
//     if (!stack.length) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//     clgCnt++;
//   }
//   // top
//   else if (input[i].trim().slice(0, 5) === "top") {
//     if (stack.length) {
//       console.log(stack[stack.length - 1]);
//     } else {
//       console.log(-1);
//     }
//     clgCnt++;
//   }
//   cnt++;
// }
// console.log(cnt);
// console.log(clgCnt);

for (let i = 1; i <= N; i++) {
  switch (input[i].trim().slice(0, 5)) {
    case "push ":
      stack.push(input[i].slice(5));
      break;
    case "pop":
      !!stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
      stack.pop();
      break;
    case "size":
      console.log(stack.length);
      break;
    case "empty":
      !!stack.length ? console.log(0) : console.log(1);
      break;
    case "top":
      !!stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
      break;
  }
}
