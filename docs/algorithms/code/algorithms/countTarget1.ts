function countTarget(scores: number[], target: number): number {
  return scores.reduce((acc, curr) => (curr === target ? acc + 1 : acc), 0);
}
