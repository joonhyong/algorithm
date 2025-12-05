// 백준 2609번 최대공약수와 최소공배수
// 분류 : 수학, 정수론
/*입력예제
24 18
*/
/*유도코드
- 변수 a, b로 입력예제의 두 수를 할당
- 방법1) 최대공약수를 브루트포스로 구하기
    - 최대공약수(gcd) 구하기
        - a의 약수들을 배열 arrA에 추가
        - b의 약수들을 배열 arrB에 추가
        - 두 배열의 최댓값 중 더 작은 배열을 외부 반복문에, 더 큰 배열을 내부 반복문에 위치
        - 중첩 반복문을 실행하여 아래의 과정을 수행
            1. 외부 반복문 배열의 마지막 요소부터 반복 시작 (배열의 인덱스를 1씩 줄여감)
            2. 내부 반복문 배열의 마지막 요소부터 비교 시작 (배열의 인덱스를 1씩 줄여감)
            3. 두 값이 같을 때, 해당 값을 gcd에 할당 후 break
    - 최소공배수(lcm) 구하기
        - a, b를 곱하고 gcd로 나눈 값은 lcm에 할당
        - lcm = a * b / gcd

- 방법2) 최대공약수를 유클리드 호제법으로 구하기
    - 두 수를 비교하여 a < b 이면 a의 값과 b의 값을 서로 바꿈
    - 유클리드 호제법의 내용을 수행하는 함수를 선언
    function gcd(a, b) {
        while(b !== 0) {
            temp = b
            b = a % b
            a = temp;
        }
        return a;
    }
    OR
    function gcd(a, b) {
      r = a % b;
      if (r === 0) return;
      gcd(b, r);
    }
*/
/* 알게 된 점 + 공부해야 할 점
- 최대공약수를 영어로 하면 Greatest Common Divisor (GCD) 
- 최소공배수를 영어로 하면 Least Common Multiple (LCM)
- 두 수 a, b의 최소공배수 = a*b/gcd(a,b)
- gdc(a,b): 두 수 a, b의 최대공약수
- 유클리드 호제법
    - 두 수 a, b가 주어지고 a > b 라면, a/b를 수행
    - a = b*q + r (q: 몫, r: 나머지)
    - r이 0이 아닌 경우: a자리에는 b를, b자리에는 r을 넣어 수행 (r이 0이 될 때까지 반복)
    - r이 0인 경우: b가 최대공약수
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map((x) => Number(x));

// const arrA = [];
// const arrB = [];
// let gcd = 0;
// let lcm = 0;

// 방법1) 브루트포스로 최대공약수 구하기
// for (let i = 1; i <= a; i++) {
//   if (a % i === 0) {
//     arrA.push(i);
//   }
// }
// for (let i = 1; i <= b; i++) {
//   if (b % i === 0) {
//     arrB.push(i);
//   }
// }

// if (Math.max(...arrA) > Math.max(...arrB)) {
//   outer: for (let i = arrB.length - 1; i >= 0; i--) {
//     for (let j = arrA.length - 2; j >= 0; j--) {
//       if (arrB[i] === arrA[j]) {
//         gcd = arrB[i];
//         break outer;
//       }
//     }
//   }
// } else {
//   outer: for (let i = arrA.length; i >= 0; i--) {
//     for (let j = arrB.length - 1; j >= 0; j--) {
//       if (arrA[i] === arrB[j]) {
//         gcd = arrA[i];
//         break outer;
//       }
//     }
//   }
// }

// 방법2) 유클리드 호제법으로 최대공약수 구하기
if (a < b) {
  let temp = a;
  a = b;
  b = temp;
}
// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
function gcd(a, b) {
  let r = a % b;
  if (r === 0) return b;
  return gcd(b, r);
}

gcd = gcd(a, b);
lcm = (a * b) / gcd;

console.log(gcd);
console.log(lcm);
