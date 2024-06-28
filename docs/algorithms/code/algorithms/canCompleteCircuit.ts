function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;

  let totalCost = 0,
    totalGas = 0,
    start = 0,
    tank = 0;

  for (let i = 0; i < n; i++) {
    totalCost += cost[i];
    totalGas += gas[i];
    tank += gas[i] - cost[i];

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return totalGas >= totalCost ? start : -1;
}
