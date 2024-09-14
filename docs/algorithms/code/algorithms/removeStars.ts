function removeStars(s: string): string {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (val === "*" && str.length) {
      str = str.substring(0, str.length - 1);
    } else {
      str += val;
    }
  }
  return str;
}
