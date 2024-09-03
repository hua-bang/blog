function strStr(haystack: string, needle: string): number {
  let index = 0;
  while (index < haystack.length) {
    const strFromHaystack = haystack.slice(index, index + needle.length);
    if (strFromHaystack === needle) {
      return index;
    }
    index++;
  }

  return -1;
}
