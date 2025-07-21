// 思路：找最小的字符串，然后遍历
// 复杂度：时间复杂度 O(n ^ 2), 空间复杂度 O(1)
function longestCommonPrefix(strs: string[]): string {
  let targetStr = strs[0];
  strs.forEach(str => {
    if (str.length <= targetStr.length) {
      targetStr = str;
    }
  });
  let res = '';

  for (let i = 0; i < targetStr.length; i++) {
    const nextRes = `${res}${targetStr[i]}`;
    for (let str of strs) {
      if (str[i] !== targetStr[i]) {
        return res;
      }
    }
    res = nextRes;
  }

  return res;
};