function encode(str: string): string {
  let result = "";
  let index = 0;

  while (index < str.length) {
    let count = 1;
    const num = str[index];
    while (str[index] === str[index + 1]) {
      count++;
      index++;
    }
    result = result + `${count}${num}`;
    index++;
  }

  return result;
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
