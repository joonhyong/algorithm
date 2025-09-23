const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

var input = Number(inputData);
var res = "";
for (let i = 1; i <= input; i++) {
  res += i + "\n";
}

console.log(res);
