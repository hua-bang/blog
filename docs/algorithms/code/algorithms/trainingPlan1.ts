function trainingPlan(actions: number[]): number[] {
  const odd: number[] = [],
    even: number[] = [];

  for (let i = 0; i < actions.length; i++) {
    if (actions[i] % 2 === 0) {
      even.push(actions[i]);
    } else {
      odd.push(actions[i]);
    }
  }

  return [...odd, ...even];
}

function trainingPlan(actions: number[]): number[] {
  let left = 0,
    right = actions.length - 1;

  while (left < right) {
    while (actions[left] % 2 === 1 && left < right) {
      left++;
    }

    while (actions[right] % 2 === 0 && left < right) {
      right--;
    }

    if (left < right) {
      const temp = actions[left];
      actions[left] = actions[right];
      actions[right] = temp;
      left++;
      right--;
    }
  }

  return actions;
}
