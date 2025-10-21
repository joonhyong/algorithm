const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const arrEdge = input.map((line) => line.split(" ").map(Number));
const graph = Array.from(Array(N + 1), () => []);

arrEdge.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

graph.forEach((line) => line.sort((a, b) => a - b));

const visited = Array(N + 1).fill(false);
const answerDfs = [];
function dfs(s) {
  if (visited[s]) return;
  visited[s] = true;
  answerDfs.push(s);
  for (let n of graph[s]) {
    if (!visited[n]) dfs(n);
  }
}

visited.fill(false);
const answerBfs = [];
function bfs(s) {
  const queue = [s];
  visited[s] = true;
  while (queue.length) {
    let v = queue.shift();
    answerBfs.push(v);
    for (let n of graph[v]) {
      if (!visited[n]) {
        queue.push(n);
        visited[n] = true;
      }
    }
  }
}

dfs(V);
visited.fill(false);
bfs(V);
console.log(answerDfs.join(" "));
console.log(answerBfs.join(" "));
