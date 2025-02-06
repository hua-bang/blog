// 复杂度分析： 时间复杂度 O(m * n)，空间复杂度 O(1)。
function strStr(haystack: string, needle: string): number {
  const needleLength = needle.length;
  const haystackLength = haystack.length;
  if(needleLength > haystackLength) {
    return -1;
  }

  for(let i = 0; i < haystackLength; i++) {
    let index1 = i, index2= 0;
    while(index1 < haystackLength && index2 < needleLength && haystack[index1] === needle[index2]) {
      index1++;
      index2++;
    }

    if(index2 >= needleLength) {
      return i;
    } else {
      continue;
    }
  }

  return -1;
};