function findTargetIn2DPlants(plants: number[][], target: number): boolean {
  if(!plants.length || !plants[0].length) {
    return false;
  }
  const m = plants.length, n = plants[0].length;
  let row = 0, col = n - 1;
  
  while(row < m && col >= 0) {
    const curr = plants[row][col];
    if(curr === target) {
      return true;
    }

    if(curr > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};