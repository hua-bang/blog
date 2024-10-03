function lengthOfLastWord(s: string): number {
  s = s.trim();
  const arr = s.split(' ');
  return arr[arr.length - 1].length;
};