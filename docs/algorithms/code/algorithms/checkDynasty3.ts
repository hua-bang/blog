function checkDynasty(places: number[]): boolean {
  let max = 0,
    min = 14;
  let set = new Set<number>();

  for (let i = 0; i < places.length; i++) {
    const val = places[i];
    if (val === 0) {
      continue;
    }

    if (set.has(val)) {
      return false;
    }

    set.add(val);
    max = Math.max(max, val);
    min = Math.min(min, val);
  }

  return max - min < 5;
}
