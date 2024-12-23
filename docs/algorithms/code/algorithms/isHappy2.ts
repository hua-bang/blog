function computed(n: number) {
  return [...(n + '')].reduce((acc, curr) => acc + Number(curr) * Number(curr), 0);
}

function isHappy(n: number): boolean {
  let slow = n, fast = n;

  while (true) {
    slow = computed(slow);
    fast = computed(computed(fast));

    if (fast === 1 || slow === 1) {
      return true;
    }

    if (slow === fast) {
      return false;
    }
  }

  return false;
};

function computed(n: number) {
  return [...(n + '')].reduce((acc, curr) => acc + Number(curr) * Number(curr), 0);
}

function isHappy(n: number): boolean {
  const set = new Set();

  let slow = n;

  while (true) {
    if (slow === 1) {
      return true;
    }

    if (set.has(slow)) {
      return false;
    }

    set.add(slow);
    slow = computed(slow);

  }

  return false;
};