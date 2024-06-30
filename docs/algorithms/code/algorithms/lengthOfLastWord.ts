function lengthOfLastWord(s: string): number {
  const length = s.length;
  let index = length - 1;

  while (s[index] === " ") {
    index--;
  }

  let count = 0;
  while (index >= 0 && s[index] !== " ") {
    index--;
    count++;
  }

  return count;
}
