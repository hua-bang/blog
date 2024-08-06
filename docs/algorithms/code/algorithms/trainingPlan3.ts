function trainingPlan(actions: number[]): number {
  const map = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    if (!map[action]) {
      map[action] = 1;
    } else {
      map[action] = map[action] + 1;
    }
  }

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    if (map[action] === 1) {
      return action;
    }
  }

  return -1;
}
