function strStr(haystack: string, needle: string): number {
  let hIndex = 0;

  while (hIndex < haystack.length) {
    const str = haystack.slice(hIndex, hIndex + needle.length);
    if (str === needle) {
      return hIndex;
    }
    hIndex++;
  }

  return -1;
}
