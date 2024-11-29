function isSubsequence(s: string, t: string): boolean {
  if (!s.length) {
    return true;
  }

  let index1 = 0, index2 = 0;
  while (index2 < t.length) {
    if (index1 === s.length) {
      return true;
    }
    if (t[index2] === s[index1]) {
      index1++;
    }

    index2++;
  }

  return index1 === s.length;
};