// 백준 2884번 알람 시계
/*입력예제
10 10
*/
/*유도코드
조건문에서 M이 0미만으로 떨어질때 H에 영향을 미치는 수행을 작성
 */

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [H, M] = input.shift().split(" ").map(Number);
//console.log(H, M);
function alarm(h, m) {
  m -= 45;
  if (m < 0) {
    m = 60 + m;
    h -= 1;
    if (h < 0) {
      h = 23;
    }
  }
  console.log(h, m);
}

alarm(H, M);
