function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  if (!plants.length || !plants[0].length) {
    return false;
  }

  const m = plants.length,
    n = plants[0].length;

  let i = 0,
    j = n - 1;
  while (i < m && j >= 0) {
    if (plants[i][j] === target) {
      return true;
    }

    if (plants[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}
