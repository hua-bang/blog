function backtrack(
  state: number[],
  choices: number[],
  selected: boolean[],
  res: number[][]
): void {
  if(state.length === choices.length) {
    res.push([...state])
  }

  choices.forEach((choice, i) => {
    if(selected[i]) {
      return;
    }

    selected[i] = true;
    state.push(choice);
    backtrack(state, choices, selected, res);
    selected[i] = false;
    state.pop();
  })
}


function permutationsI(nums: number[]): number[][] {
  const res: number[][] = [];
  backtrack([], nums, Array(nums.length).fill(false), res);
  return res;
}