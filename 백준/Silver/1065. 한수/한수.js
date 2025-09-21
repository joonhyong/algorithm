const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../exam.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let cnt = 0;
outer: for (let i = 1; i <= Number(input); i++) {
  if (i.toString().length <= 2) {
    cnt++;
    continue;
  }
  arr = i.toString().split("").map(Number);
  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[j] - arr[j - 1] === arr[j + 1] - arr[j]) continue;
    else continue outer;
  }
  cnt++;
}

console.log(cnt);
