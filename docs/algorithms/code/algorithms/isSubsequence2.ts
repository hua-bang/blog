function isSubsequence(s: string, t: string): boolean {
  let index1 = 0, index2 = 0;

  while (index1 < s.length && index2 < t.length) {
    if (s[index1] === t[index2]) {
      index1++;
    }
    index2++;
  }

  return index1 >= s.length;
};