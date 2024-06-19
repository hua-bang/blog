function encode(str: string): string {
  let result = "";
  let index = 0;
  while (index < str.length) {
    let count = 1;
    while (index < str.length && str[index] === str[index + 1]) {
      index++;
      count++;
    }
    result += `${count}${str[index]}`;
    index++;
  }

  return result;
}

function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }

  let res = "1";

  for (let i = 1; i < n; i++) {
    res = encode(res);
  }

  return res;
}
