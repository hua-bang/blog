// 时间 O(MN)
// 空间 O(M)
function getLongestCommonPrefix(str1: string, str2: string) {
  const length = Math.min(str1.length, str2.length);
  let index = 0;
  while (index < length && str1[index] === str2[index]) {
    index++;
  }
  return str1.substring(0, index);
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  let prefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    prefix = getLongestCommonPrefix(prefix, strs[i]);
    if (prefix.length === 0) {
      return "";
    }
  }

  return prefix;
}
