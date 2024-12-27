function reverseWords(s: string): string {
  s = s.trim();
  const res: string[] = [];

  let index = 0;

  while (index < s.length) {
    let left = index;
    if (s[left] === " ") {
      index++;
      continue;
    }

    let right = index;
    while (right < s.length && s[right] !== " ") {
      right++;
    }

    res.unshift(
      s.slice(left, right)
    );
    index = right;
  }

  return res.join(" ");
};