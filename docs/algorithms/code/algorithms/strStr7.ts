// 思路：通过每个 Index 匹配，看看是否连续
// 时间复杂度：O(n * m)， 空间复杂度 O(1)
function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) {
    return -1
  }

  for (let i = 0; i <= haystack.length - needle.length + 1; i++) {
    let hayStackIndex = i, needleIndex = 0;

    while (hayStackIndex < haystack.length && needleIndex < needle.length && haystack[hayStackIndex] === needle[needleIndex]) {
      hayStackIndex++;
      needleIndex++;
    }

    if (needleIndex !== needle.length) {
      continue;
    } else {
      return i;
    }
  }

  return -1;
}