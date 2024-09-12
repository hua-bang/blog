function encode(s: string): string {
  let res = "",
    index = 0;
  while (index < s.length) {
    let count = 1;
    const num = s[index];
    while (s[index] === s[index + 1]) {
      count++;
      index++;
    }
    res = res + `${count}${num}`;
    index++;
  }

  return res;
}

function countAndSay(n: number): string {
  if (n == 1) {
    return "1";
  }

  let res = "1";

  for (let i = 1; i < n; i++) {
    res = encode(res);
  }

  return res;
}
