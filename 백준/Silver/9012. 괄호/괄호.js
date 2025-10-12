// 백준 9012번 괄호
// 분류 : 구현, 자료구조, 스택
/*입력예제
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()( 

3
((
))
())(()
*/
/*유도코드

 */
/* 알게된 점

 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  const stack1 = input[i].trim().split("");
  const stack2 = [];

  while (stack1.length) {
    if (stack1[stack1.length - 1] === "(") {
      if (stack2.length) {
        stack1.pop();
        stack2.pop();
      } else break;
    } else if (stack1[stack1.length - 1] === ")") {
      stack2.push(stack1.pop());
    }
  }

  if (!stack1.length && !stack2.length) console.log("YES");
  else console.log("NO");
}
