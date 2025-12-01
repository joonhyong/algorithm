// 백준 1018번 체스판 다시 칠하기
// 분류 : 구현, 브루트포스
/*입력예제
8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
*/
/*유도코드
    - M과 N은 8이상 50이하 이므로 중첩 for문을 시도해볼 만하다.
    - 방법1
        - 중첩 for문을 탐색할 예정    
            1. 외부 for문은 행을 0부터 M-8-1번째 인덱스까지 순회할 예정
            2. 내부 for문은 열을 0부터 N-8-1번째 인덱스까지 순회할 예정
        - 내부 for문을 순회할때 마다 보드를 칠하는 알고리즘 수행
            1. 좌표 0,0부터 좌표 7,7까지 순회
            2. 이전 요소의 문자열과 같은 경우 answer++
     - 방법2
        - 외부for문: input의 시작 지점 설정 
            1. 내부for문
              - input에서 board를 뜯어옴
              - 해당 board를 boardB와 boardW와 비교
              - cntW와 cntB를 카운트 (다른부분이 있는 경우)
            2. answer에 answer, cntW, cntB 중에서 가장 작은 수를 저장
        - answer 출력    
*/
/* 알게 된 점 + 공부해야 할 점
- 반드시 2차원배열일 필요는 없다!
  - 체스판의 행이 문자열로 이뤄져 있음 -> 문자열도 인덱스로 접근이 가능

*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
let answer = Infinity;
const boardW = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const boardB = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

for (let i = 0; i <= M - 8; i++) {
  for (let j = 0; j <= N - 8; j++) {
    // board 뜯어오기
    const board = [];
    for (let k = 0; k < 8; k++) {
      board.push(input[i + 1 + k].slice(j, j + 8));
    }

    // boardW & boardB와 비교 -> cntW & cntB 계산
    let cntW = 0;
    let cntB = 0;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (board[y][x] !== boardW[y][x]) cntW++;
        if (board[y][x] !== boardB[y][x]) cntB++;
      }
    }

    // answer 값 결정
    answer = Math.min(answer, cntW, cntB);
  }
}

console.log(answer);
