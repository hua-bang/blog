function trainingPlan(actions: number[]): number {
  const map: Record<number, number> = {};

  for (let i = 0; i < actions.length; i++) {
    if (!map[actions[i]]) {
      map[actions[i]] = 0;
    }
    map[actions[i]]++;
  }

  for (let i = 0; i < actions.length; i++) {
    if (map[actions[i]] === 1) {
      return actions[i];
    }
  }

  return -1;
}
