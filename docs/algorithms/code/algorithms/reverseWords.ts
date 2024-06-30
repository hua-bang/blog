function reverseWords(s: string): string {
  const str = s.trim();

  let res = "";
  let index = str.length - 1;
  while (index >= 0) {
    const word: string[] = [];

    while (index >= 0 && str[index] !== " ") {
      word.unshift(str[index] as string);
      index--;
    }

    res += word.join("");

    if (index > 0) {
      res += " ";
    }
    while (index >= 0 && str[index] === " ") {
      index--;
    }
  }

  return res;
}
