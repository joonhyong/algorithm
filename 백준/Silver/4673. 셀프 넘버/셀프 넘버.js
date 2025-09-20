let arr = [];
for (let i = 0; i < 10000; i++) {
  arr[i] = i + 1;
}

function d(n) {
  s = String(n);
  for (let i = 0; i < s.length; i++) {
    n += Number(s[i]);
  }
  return n;
}

for (let i = 1; i <= 10000; i++) {
  let target = d(i);
  if (arr.includes(target)) {
    const idx = arr.indexOf(target);
    arr.splice(idx, 1);
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
