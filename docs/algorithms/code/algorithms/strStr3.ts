function strStr(haystack: string, needle: string): number {
  const needleLength = needle.length, haystackLength = haystack.length;
  if (needleLength > haystackLength) {
    return -1;
  }

  for (let i = 0; haystackLength - i >= needleLength; i++) {
    let index = i, index2 = 0;
    while (index2 < needleLength && haystack[index] === needle[index2]) {
      index++;
      index2++;
    }

    if (index2 >= needleLength) {
      return i;
    } else {
      continue;
    }
  }

  return -1;
};