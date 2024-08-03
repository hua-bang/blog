function checkDynasty(places: number[]): boolean {
  let set = new Set<number>();
  let max = 0,
    min = 14;

  for (let i = 0; i < places.length; i++) {
    if (places[i] === 0) {
      continue;
    }

    if (set.has(places[i])) {
      return false;
    } else {
      set.add(places[i]);
      max = max < places[i] ? places[i] : max;
      min = min > places[i] ? places[i] : min;
    }
  }

  if (max - min >= 5) {
    return false;
  }

  return true;
}
