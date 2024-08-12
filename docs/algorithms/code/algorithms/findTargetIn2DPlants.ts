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

function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  if (!plants.length || !plants[0].length) {
    return false;
  }

  let row = plants.length - 1,
    col = 0;

  while (row >= 0 && col < plants[0].length) {
    if (plants[row][col] === target) {
      return true;
    }

    if (plants[row][col] < target) {
      col++;
    } else {
      row--;
    }
  }

  return false;
}
