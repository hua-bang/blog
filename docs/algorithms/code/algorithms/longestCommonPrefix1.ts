function longestCommonPrefix(strs: string[]): string {
  strs = strs.sort((a, b) => a.length - b.length);
  let res = '';

  for(let i = 0; i < strs[0].length; i++) {
    const nextRes = `${res}${strs[0][i]}`;
    for(let str of strs) {
      if(!str.startsWith(nextRes)) {
        return res;
      }
    }
    res = nextRes;
  }

  return res;
};