function computed(n: number) {
  return [...(n + '')].reduce((acc, curr) => acc + Number(curr) * Number(curr), 0);
}

function isHappy(n: number): boolean {
  const set = new Set<number>();

  let curr = n;

  while (true) {
    if (curr === 1) {
      return true;
    }

    if (set.has(curr)) {
      return false;
    }

    set.add(curr);
    curr = computed(curr);
  }

  return false;
}

