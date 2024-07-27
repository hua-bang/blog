function countTarget(scores: number[], target: number): number {
  return scores.reduce(
    (count, curr) => (curr === target ? count + 1 : count),
    0
  );
}
