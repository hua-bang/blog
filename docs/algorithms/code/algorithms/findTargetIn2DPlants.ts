function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  if (plants.length === 0 || plants[0].length === 0) {
    return false;
  }
  const col = plants.length;

  const row = plants[0].length;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (plants[i][j] === target) {
        return true;
      }

      if (plants[i][j] > target) {
        break;
      }
    }
  }

  return false;
}

let a = Infinity;
