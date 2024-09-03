function longestCommonPrefix(strs: string[]): string {
  let str = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (str.length > strs[i].length) {
      str = strs[i];
    }
  }

  while (str) {
    let flag = true;
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(str)) {
        flag = false;
        str = str.slice(0, -1);
        break;
      }
    }

    if (flag) {
      return str;
    }
  }

  return str;
}
