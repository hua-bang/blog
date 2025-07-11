function countTarget(scores: number[], target: number): number {
  let count = 0;

  for(let i = 0; i < scores.length; i++) {
    if(scores[i] === target) {
      count++;
    } else if (scores[i] > target) {
      break;
    }
  }

  return count;
};