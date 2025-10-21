const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(false);

// 에지 저장
input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

function dfs(s) {
  visited[s] = true;
  for (let n of graph[s]) {
    if (!visited[n]) {
      dfs(n);
    }
  }
}

let cnt = 0;
for (let i = 1; i <= N; i++) {
  // 1번부터 N번까지 정점 검사
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);