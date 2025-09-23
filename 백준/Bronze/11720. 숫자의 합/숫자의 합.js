// 백준 11720번 숫자의 합
/*입력예제
5
54321
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input.shift());

// 두번째 열의 숫자->문자열하고, 한자리씩 떼어오기
// let sum = 0;
// let numbers = input.shift();
// for (let i = 0; i < numbers.length; i++) {
//   sum += Number(numbers[i]);
// }
// console.log(sum);

// 두번째의 열을 배열로 변환하고 forEach문 사용
let numbers = input.shift().split("").map(Number);
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log(sum);
