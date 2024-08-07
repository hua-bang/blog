function iceBreakingGame(num: number, target: number): number {
  let x = 0;
  for (let i = 2; i <= num; i++) {
    x = (x + target) % i;
  }
  return x;
}
