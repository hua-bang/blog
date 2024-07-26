function reverseMessage(message: string): string {
  const str = message.trim();
  let res: string[] = [];

  let left = 0,
    right = 0;

  while (right < str.length) {
    if (str[left] === " ") {
      while (str[right] === " " && right < str.length) {
        right++;
      }
      left = right;
      continue;
    }

    if (str[left] !== " ") {
      while (str[right] !== " " && right < str.length) {
        right++;
      }
      res.unshift(str.substring(left, right));
      left = right;
    }
  }

  return res.join(" ");
}
