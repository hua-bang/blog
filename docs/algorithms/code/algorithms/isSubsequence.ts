function isSubsequence(s: string, t: string): boolean {
  let sLength = s.length,
    tLength = t.length;

  if (sLength > tLength) {
    return false;
  }

  let sIndex = 0;

  for (let i = 0; i < tLength; i++) {
    if (t[i] === s[sIndex]) {
      sIndex++;
    }
  }

  return sIndex === sLength;
}
