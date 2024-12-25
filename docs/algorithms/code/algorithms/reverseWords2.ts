function reverseWords(s: string): string {
  let str = "";

  let index = 0;

  while (index < s.length) {
    while (index < s.length && s[index] === " ") {
      index++;
    }

    if (index >= s.length) {
      break;
    }

    let rightIndex = index;
    while ((rightIndex + 1) < s.length && s[rightIndex + 1] !== " ") {
      rightIndex++;
    }

    const nextStr = s.slice(index, rightIndex + 1);
    str = str ? `${nextStr} ${str}` : nextStr;
    index = rightIndex + 1;
  }

  return str;
};

function reverseWords(s: string): string {
  s = s.trim();
  let res = [];

  let index = 0;

  while (index < s.length) {
    let left = index;
    if (s[left] == " ") {
      index++;
      continue;
    } else {
      let right = index;
      while (right < s.length && s[right] !== " ") {
        right++;
      }
      res.unshift(
        s.slice(left, right)
      )
      index = right;
    }
  }

  return res.join(" ");
};