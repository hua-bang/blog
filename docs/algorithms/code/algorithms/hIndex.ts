function hIndex(citations: number[]): number {
  let n = citations.length;

  for (let referCount = n; referCount > 0; referCount--) {
    let count = 0;

    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= referCount) {
        count++;
      }
    }

    if (count >= referCount) {
      return referCount;
    }
  }

  return 0;
}
