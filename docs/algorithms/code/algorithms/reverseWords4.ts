function reverseWords(s: string): string {
  s.trim();
  const res: string[] = [];

  let n = s.length;

  let index = 0;

  while(index < n) {
    while(index < n && s[index] === " ") {
      index++;
    }
    if(index === n) {
      break;
    }

    const left = index;
    let right = index + 1;
    while(right < n && s[right] !== " ") {
      right++;
    }
    res.push(
      s.slice(left, right)
    );
    index = right;
  }

  return res.join("");
};