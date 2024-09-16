function trainingPlan(actions: number[]): number[] {
  const res: number[] = [];
  let left = 0,
    right = actions.length - 1;

  for (let i = left; i <= right; i++) {
    const action = actions[i];

    if (action % 2 === 1) {
      res.unshift(action);
    } else {
      res.push(action);
    }
  }

  return res;
}
