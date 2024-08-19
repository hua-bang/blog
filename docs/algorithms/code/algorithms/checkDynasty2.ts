function checkDynasty(places: number[]): boolean {
  let set = new Set<number>();
  let min = 14,
    max = 0;

  for (let i = 0; i < places.length; i++) {
    if (places[i] === 0) {
      continue;
    }

    if (set.has(places[i])) {
      return false;
    }

    set.add(places[i]);
    max = Math.max(max, places[i]);
    min = Math.min(min, places[i]);
  }

  if (max - min >= 5) {
    return false;
  }

  return true;
}
