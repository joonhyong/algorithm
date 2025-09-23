// 백준 4673번 셀프넘버

/* 유도코드
(1) 구현
1~10000의 숫자가 담겨져있는 배열을 생성한다. -> 1부터 10000까지의 숫자가 들어있는 배열 구현
1부터 순차적으로 생성자함수에 넣어서 생성되는 숫자를 배열에서 제거한다. -> 생성자 함수 d() 구현
생성자 함수란 해당 숫자로 만들어지는 다음 숫자를 반환하는 함수
생성된 숫자가 이전에 이미 제거한 숫자인 경우(중복될 경우) 건너뛴다. -> for문을 통해 배열의 생성자존재 숫자들을 제거
for이 끝난 후의 배열의 요소들을 순차적으로 출력한다.
*/
const N = 10000;
let arr = [];
for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

function d(n) {
  s = String(n);
  for (let i = 0; i < s.length; i++) {
    n += Number(s[i]);
  }
  return n;
}

// 전체 arr에서 생성자가 존재하는 수 삭제
for (let i = 1; i <= N; i++) {
  let target = d(i);
  if (arr.includes(target)) {
    const idx = arr.indexOf(target);
    arr.splice(idx, 1);
  }
}

// 수정한 arr 출력
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
