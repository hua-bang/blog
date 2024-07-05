function isHappy(n: number): boolean {
  const map: Record<string, boolean> = {};
  let temp = n;

  while (temp !== 1) {
    if (map[temp] !== undefined) {
      return false;
    }
    map[temp] = true;
    temp = (temp + "").split("").reduce((l, i) => l + Number(i) * Number(i), 0);
  }

  return true;
}

function compute(n: number): number {
  return (n + "").split("").reduce((l, i) => l + Number(i) * Number(i), 0);
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  while (true) {
    slow = compute(slow);
    fast = compute(fast);
    fast = compute(fast);

    if (slow === 1 || fast === 1) {
      return true;
    }

    if (slow === fast) {
      return false;
    }
  }

  return true;
}
