// 백준 11866번 요세푸스 문제
// 분류 : 구현, 자료구조, 큐
/*입력예제
7 3
*/
/*유도코드
    - yose: 1~N까지 순차적으로 삽입한 배열
    - answer: 정답 배열
    - 1 2 3 4 5 6 7 []
    - 1 2 4 5 6 7   [3]
    - 1 2 5 6 7     [3 4]
    - 1 2 6 7       [3 4 5]
    - 1 2 7         [3 4 5 6]
    - 1 2           [3 4 5 6 7]
    - 2             [3 4 5 6 7 1]
    -               [3 4 5 6 7 1 2]

    - 방법1: 배열 + splice메서드를 이용하여 아래의 과정을 수행
        - 1) yose.length >= K
            - yose배열의 K번째 요소를 answer배열에 삽입
        - 2) yose.length < K && yose.length !== 1
            - yose배열의 K % yose.length 번째의 요소를 answer배열에 삽입
        - 3) yose.length === 1
            - yose배열의 요소를 answer배열에 삽입
    
    - 방법2: 배열을 큐로 다루기
        - 1) k-1번 반복: yose배열을 shift 후에 answer배열에 psuh  
        - 2) yose배열을 shift
        - 해당 과정을 yose배열이 빌때까지 반복
        - answer 배열 출력
*/
/* 알게 된 점 + 공부해야 할 점

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

// 방법1
// const [N, K] = input[0].split(" ").map(Number);
// const yose = Array.from({ length: N }, (_, i) => i + 1);
// const answer = [];

// for (let i = 0; i < N; i++) {
//   const Y = yose.length;
//   if (Y > K || Y === K) {
//     console.log(i+1);
//     answer.push(Number(yose.splice(K - 1, 1)));
//   } else if (Y < K && Y !== 1) {
//     console.log(i+1);
//     answer.push(Number(yose.splice((K % Y) - 1, 1)));
//   } else if (Y === 1) {
//     answer.push(yose[0]);
//   }
// }

// 방법2
const [N, K] = input[0].split(" ").map(Number)
const yose = Array.from({length: N}, (_, i)=>i+1);
const answer = [];

while (yose.length !== 0) {
    for (let i = 0; i < K-1; i++) {
        yose.push(yose.shift());        
    }
    answer.push(yose.shift());
}

console.log(`<${answer.join(", ")}>`);
